from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from .emails import *
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view
from rest_framework import status
from .models import *
from .serializer import *
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes


def handle_error(e):
    return Response({
        'status': 500,
        'message': 'Internal server error',
        'data': str(e),
    }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
def register(request):
    try:
        data = request.data
        serializer = UserSerializer(data=data)
        if serializer.is_valid():
            user = serializer.save()
            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)
            send_otp_via_mail(user.email, user.otp)
            return Response({
                "status": 200,
                "message": "Registered successfully. Check your email for verification.",
                'data': serializer.data,
                "access_token": access_token,
            })

        return Response({
            'status': 400,
            'message': 'Something went wrong',
            'data': serializer.errors,
        })
    except Exception as e:
        return handle_error(e)

@api_view(['POST'])
def verify_otp(request):
    try:
        data = request.data
        serializer = VerifyAccountSerializer(data=data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            otp = serializer.validated_data['otp']
            user = User.objects.filter(email=email).first()
            if not user:
                return Response({
                    'status': 400,
                    'message': 'Invalid email',
                    'data': 'User with this email does not exist.',
                })

            if user.otp != otp:
                return Response({
                    'status': 400,
                    'message': 'Invalid OTP',
                    'data': 'The OTP provided does not match.',
                })

            # Mark user as verified
            user.is_verified = True
            user.save()

            send_account_verified_email(email)

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
        return handle_error(e)
        
@api_view(['POST'])
def forgot_password(request):
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
        send_forget_pass_otp_via_mail(user.email)
        return Response({
            'status': 200,
            'message': 'OTP sent to your email for password reset',
        })
    except Exception as e:
        return handle_error(e)   

@api_view(['POST'])
def reset_password(request):
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
        return handle_error(e)

@api_view(['POST'])
def login(request):
    try:
        data = request.data
        email = data.get('email') 
        password = data.get('password')

        # Check if both email and password are provided
        if not email or not password:
            return Response({
                'status': 400,
                'message': 'Email and password are required',
                'data': {'email': email, 'password': password},
            })

        user = authenticate(email=email, password=password)
        if user:
            # Generate JWT token
            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)
            return Response({
                'status': 200,
                'message': 'Logged in successfully',
                'data': {'Bearer token': access_token}
            })

        # Invalid credentials
        return Response({
            'status': 400,
            'message': 'Invalid Credentials',
        })
    except Exception as e:
        return handle_error(e)
