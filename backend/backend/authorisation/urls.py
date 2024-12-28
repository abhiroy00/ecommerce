from django.urls import path
from .views import *
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


urlpatterns = [
    path('register/', RegisterAPI.as_view(), name='Email_register'),
    path('verify/', VerifyOTP.as_view(), name='Verify_otp'),
    path('forgot/', ForgotPassword.as_view(), name='forgot_password'),
    path('reset/', ResetPassword.as_view(), name='reset_password'),
  
    path('token/', TokenObtainPairView.as_view(), name='email_pass_to_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='refresh_token_to_obtain_acesstoken'),      
]
