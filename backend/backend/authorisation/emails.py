from django.core.mail import send_mail
import random
from django.conf import settings
from .models import User

def send_otp(email, subject, purpose="verification", otp=None):
    try:
        # Generate OTP if not provided
        if otp is None:
            otp = random.randint(1000, 9999)
        
        # Compose the email
        message = f"Your OTP for {purpose.replace('_', ' ')} is {otp}."
        email_from = settings.EMAIL_FROM
        
        # Send the email
        send_mail(subject, message, email_from, [email])
        
        # Save the OTP to the user's model
        user_obj = User.objects.get(email=email)
        user_obj.otp = otp
        user_obj.save()
    
    except User.DoesNotExist:
        print(f"User with email {email} does not exist.")
    
    except Exception as e:
        print(f"Failed to send OTP to {email}: {str(e)}")

def send_otp_via_mail(email, otp=None):
    """
    Sends an OTP for email verification.
    """
    subject = f"{settings.EMAIL_FROM} Sends an OTP for email verification"
    send_otp(email, subject, purpose="verification", otp=otp)

def send_forget_otp_via_mail(email, otp=None):
    """
    Sends an OTP for resetting the password.
    """
    subject = f"{settings.EMAIL_FROM} Sends an OTP for resetting the password"
    send_otp(email, subject, purpose="reset_password", otp=otp)
