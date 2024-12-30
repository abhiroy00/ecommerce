from django.urls import path
from .views import *
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


urlpatterns = [
    path('register/', register, name='Email_register'),
    path('verify/', verify_otp, name='Verify_otp'),
    path('forgot/pass/', forgot_password, name='forgot_password'),
    path('reset/pass/', reset_password, name='reset_password'),
    
    path ('login/', login, name='email_pass_to_obtain_accesstoken'),

    path('token/', TokenObtainPairView.as_view(), name='email_pass_to_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='refresh_token_to_obtain_acesstoken'),      
]
