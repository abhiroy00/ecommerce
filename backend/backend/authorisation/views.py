from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializer import *
from .emails import send_otp_via_mail, send_forget_otp_via_mail

from rest_framework import generics
from rest_framework.permissions import AllowAny
from .models import User

from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated


class RegisterAPI(APIView):
    def post(self, request):
        try:
            data = request.data
            serializer = UserSerializer(data=data)
            if serializer.is_valid():
                # Save the user and send OTP via email
                user = serializer.save()

                # Generate JWT token
                refresh = RefreshToken.for_user(user)
                access_token = str(refresh.access_token)

                send_otp_via_mail(user.email, user.otp)
                
                return Response({
                    "status": 200,
                    "message": "Registered successfully. Check your email for verification.",
                    'data': serializer.data,
                    "access_token": access_token,  # Return the access token
                })
                
            return Response({
                'status': 400,
                'message': 'Something went wrong',
                'data': serializer.errors,
            })
        except Exception as e:
            print(e)
            return Response({
                'status': 500,
                'message': 'Internal server error',
                'data': str(e),
            })

class VerifyOTP(APIView):
    def post(self, request):
        try:
            data = request.data
            serializer = VerifyAccountSerializer(data=data)
            if serializer.is_valid():
                email = serializer.validated_data['email']
                otp = serializer.validated_data['otp']
                
                # Check if user exists
                user = User.objects.filter(email=email).first()
                if not user:
                    return Response({
                        'status': 400,
                        'message': 'Invalid email',
                        'data': 'User with this email does not exist.',
                    })

                # Check if OTP matches
                if user.otp != otp:
                    return Response({
                        'status': 400,
                        'message': 'Invalid OTP',
                        'data': 'The OTP provided does not match.',
                    })

                # Mark user as verified
                user.is_verified = True
                user.save()

                # Generate JWT token
                refresh = RefreshToken.for_user(user)
                access_token = str(refresh.access_token)

                return Response({
                    'status': 200,
                    'message': 'Verified successfully',
                    'data': {'email': email},
                    'access_token': access_token,
                })

            return Response({
                'status': 400,
                'message': 'Something went wrong',
                'data': serializer.errors,
            })
        except Exception as e:
            print(e)
            return Response({
                'status': 500,
                'message': 'Internal server error',
                'data': str(e),
            })
        
class ForgotPassword(APIView):
    def post(self, request):
        try:
            data = request.data
            email = data.get('email')

            if not email:
                return Response({
                    'status': 400,
                    'message': 'Please provide an email address.',
                    'data': {
                        'email': ''
                    }
                })
            
            user = User.objects.filter(email=email).first()
            if not user:
                return Response({
                    'status': 400,
                    'message': 'User with this email does not exist',
                    'data': {
                        'email': email
                    }

                })

            # Send OTP to the user's email
            send_forget_otp_via_mail(user.email)
            return Response({
                'status': 200,
                'message': 'OTP sent to your email for password reset',
            })
        except Exception as e:
            print(e)
            return Response({
                'status': 500,
                'message': 'Internal server error',
                'data': str(e),
            })

class ResetPassword(APIView):

    def post(self, request):
        try:
            data = request.data
            email = data.get('email')
            otp = data.get('otp')
            new_password = data.get('new_password')

            # Check if all required fields are provided
            if not email or not otp or not new_password:
                return Response({
                    'status': 400,
                    'message': 'Email, OTP, and new password are required',
                    'data': {
                        'email': email,
                        'otp': otp,
                        'new_password': new_password
                    }
                })

            # Check if the email exists
            user = User.objects.filter(email=email).first()
            if not user:
                return Response({
                    'status': 400,
                    'message': 'User with this email does not exist',
                })

            # Check if the OTP matches
            if str(user.otp) != str(otp):
                return Response({
                    'status': 400,
                    'message': 'Invalid OTP',
                })

            # Reset the password
            user.set_password(new_password)
            user.otp = None  # Clear the OTP
            user.save()

            return Response({
                'status': 200,
                'message': 'Password reset successfully',
            })
        except Exception as e:
            print(e)
            return Response({
                'status': 500,
                'message': 'Internal server error',
                'data': str(e),
            })
