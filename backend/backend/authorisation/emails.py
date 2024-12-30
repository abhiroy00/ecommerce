from django.core.mail import send_mail
import random
from django.conf import settings
from .models import User
from django.utils.timezone import now

def send_otp(email, subject, purpose="verification", otp=None):
    try:
        # Generate OTP if not provided
        if otp is None:
            otp = random.randint(1000, 9999)

        # Define the HTML message template
        if purpose == "verification":
            message = f"Your OTP for {purpose.replace('_', ' ')} is {otp}."
            html_message = f"""
            <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Email Confirmation</title>
            </head>
            <body style="font-family: Arial, sans-serif; background-color: #f9f9f9; margin: 0; padding: 0;">
            <div style="max-width: 600px; margin: 20px auto; background: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
                <div style="text-align: center;">
                <img src="https://iili.io/2kwdvCF.png" alt="Logo" style="width: 100%; margin-bottom: 10px;">
                </div>
                <div style="padding: 20px; text-align: center;">
                <h2 style="font-size: 20px; color: #333;">Email OTP Verification</h2>
                <p style="font-size: 16px; color: #555; margin: 10px 0;">{email}, </p>
                <p style="font-size: 16px; color: #555; margin: 10px 0;">you’re almost ready to start enjoying our service.<br>Simply use this OTP to verify your email address.</p>
                <a id="otpbox" style="display: inline-block; padding: 12px 25px; background-color: #ffcc00; color: #333; text-decoration: none; font-size: 16px; border-radius: 5px;"><strong>{otp}</strong></a>
                <p style="font-size: 16px; color: #555; margin: 10px 0;">If you did not request this, please ignore this email.<br>Thank you for using our service!</p>
                </div>
                <div style="background-color: #f0f0f0; text-align: center; padding: 15px; font-size: 14px; color: #888;">
                <p style="margin: 10px;">Stay in touch</p>
                <a href="#" style="margin: 0 5px;"><img src="https://iili.io/2kUfwkN.png" alt="Twitter" width="24" height="24"></a>
                <a href="#" style="margin: 0 5px;"><img src="https://iili.io/2kSmTTx.png" alt="Facebook" width="24" height="24"></a>
                <a href="#" style="margin: 0 5px;"><img src="https://iili.io/2kSDdas.png" alt="Instagram" width="24" height="24"></a>
                <p style="font-size: 14px; color: #888; margin: 10px 0;">&copy; QuickBuy LTD. All rights reserved.</p>
                <a href="#"><img src="https://iili.io/2kwCQr7.png" alt="Quickbuy" height="40px" width="auto"></a>
                </div>
            </div>
            </body>
            </html>"""

        elif purpose == "reset_password":
            message = f"Your OTP for {purpose.replace('_', ' ')} is {otp}."
            html_message = f"""
            <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Forgot Password</title>
            </head>
            <body style="font-family: Arial, sans-serif; background-color: #f9f9f9; margin: 0; padding: 0;">
            <div style="max-width: 600px; margin: 20px auto; background: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
                <div style="text-align: center;">
                <img src="https://iili.io/2kN0yYu.png" alt="Logo" style="width: 100%; margin-bottom: 10px;">
                </div>
                <div style="padding: 20px; text-align: center;">
                <h2 style="font-size: 20px; color: #333;">OTP to Reset Password</h2>
                <p style="font-size: 16px; color: #555; margin: 10px 0;">{email},</p>
                <p style="font-size: 16px; color: #555; margin: 10px 0;">Simply use this OTP to verify your Password.</p>
                <a href="#" style="display: inline-block; padding: 12px 25px; background-color: #0A2B3D; color: #ffffff; text-decoration: none; font-size: 16px; border-radius: 5px;"><strong>{otp}</strong></a>
                <p style="font-size: 16px; color: #555; margin: 10px 0;">Thank you for choosing QuickBuy.</p>
                </div>
                <div style="background-color: #f0f0f0; text-align: center; padding: 15px; font-size: 14px; color: #888;">
                <p style="margin: 10px 0;">Stay in touch</p>
                <a href="#" style="margin: 0 5px;"><img src="https://iili.io/2kUfwkN.png" alt="Twitter" width="24" height="24"></a>
                <a href="#" style="margin: 0 5px;"><img src="https://iili.io/2kSmTTx.png" alt="Facebook" width="24" height="24"></a>
                <a href="#" style="margin: 0 5px;"><img src="https://iili.io/2kSDdas.png" alt="Instagram" width="24" height="24"></a>
                <p style="font-size: 14px; color: #888; margin: 10px 0;">&copy; QuickBuy LTD. All rights reserved.</p>
                <a href="#"><img src="https://iili.io/2kwCQr7.png" alt="Quickbuy" height="40px" width="auto"></a>
                </div>
            </div>
            </body>
            </html>
            """
        elif purpose == "reset_Mail":
            message = f"Your OTP for {purpose.replace('_', ' ')} is {otp}."
            html_message = f"""
            <html>
                <body>
                    <h2>Your OTP for Resetting Your Email is:</h2>
                    <h3 style="color: #264653;">{otp}</h3>
                    <p>If you did not request this, please ignore this email.</p>
                    <p>For security reasons, the OTP will expire in 10 minutes.</p>
                    <p>Thank you for using our service!</p>
                </body>
            </html>
            """
        elif purpose == "mail_verified":
            message = f"Hi {email},\n\nYour email has been successfully verified. Your account is now active. You can now log in to your account."
            html_message = f"""
            <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Account Activated</title>
            </head>
            <body style="font-family: Arial, sans-serif; background-color: #f9f9f9; margin: 0; padding: 0;">
            <div style="max-width: 600px; margin: 20px auto; background: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
                <div style="text-align: center;">
                <img src="https://iili.io/2kwZKhJ.png" alt="Logo" style="width: 100%; margin-bottom: 10px;">
                </div>
                <div style="padding: 20px; text-align: center;">
                <h2 style="font-size: 20px; color: #333;">Account Activated</h2>
                <p style="font-size: 16px; color: #555; margin: 10px 0;">{email},</p>
                <p style="font-size: 16px; color: #555; margin: 10px 0;">Thank you, your email has been verified. Your account is now active.<br>Please use the link below to login to your account.</p>
                <a href="http://127.0.0.1:8000/api/login/" style="display: inline-block; padding: 12px 25px; background-color: #ac4dbc; color: #ffffff; text-decoration: none; font-size: 16px; border-radius: 5px;">Login to Your Account</a>
                <p style="font-size: 16px; color: #555; margin: 10px 0;">Thank you for choosing QuickBuy.</p>
              </div>
              <div style="background-color: #f0f0f0; text-align: center; padding: 15px; font-size: 14px; color: #888;">
              <p style="margin: 10px 0;">Stay in touch</p>
              <a href="#" style="margin: 0 5px;"><img src="https://iili.io/2kUfwkN.png" alt="Twitter" width="24" height="24"></a>
              <a href="#" style="margin: 0 5px;"><img src="https://iili.io/2kSmTTx.png" alt="Facebook" width="24" height="24"></a>
              <a href="#" style="margin: 0 5px;"><img src="https://iili.io/2kSDdas.png" alt="Instagram" width="24" height="24"></a>
              <p style="font-size: 14px; color: #888; margin: 10px 0;">&copy; QuickBuy LTD. All rights reserved.</p>
              <a href="#"><img src="https://iili.io/2kwCQr7.png" alt="Quickbuy" height="40px" width="auto"></a>
              </div>
            </div>
            </body>
            </html>
            """
        else:
            raise ValueError("Invalid purpose provided.")

        # Define the sender email
        email_from = settings.EMAIL_FROM

        try:
            send_mail(
                subject, 
                message, 
                email_from, 
                [email],
                html_message=html_message,
            )
        except Exception as e:
            print(f"Failed to send HTML message to {email}: {str(e)}")
            # If HTML message fails, send the plain text message instead
            send_mail(
                subject, 
                message, 
                email_from, 
                [email],
                html_message=None  # No HTML content in the fallback
            )
        
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
    Sends an OTP for email verification with HTML content.
    """
    subject = f"{settings.ORG_NAME} Sends an OTP for Email Verification"
    send_otp(email, subject, purpose="verification", otp=otp)


def send_forget_pass_otp_via_mail(email, otp=None):
    """
    Sends an OTP for resetting the password with HTML content.
    """
    subject = f"{settings.ORG_NAME} Sends an OTP for Resetting the Password"
    send_otp(email, subject, purpose="reset_password", otp=otp)

def send_account_verified_email(email):
    """
    Sends an email to the user after the account is verified.
    """
    subject = f"{settings.ORG_NAME} Account Verified"
    send_otp(email, subject, purpose="mail_verified")

