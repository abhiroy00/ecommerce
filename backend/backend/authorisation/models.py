from django.db import models
from django.contrib.auth.models import AbstractBaseUser , PermissionsMixin
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from .manager import UserManager
from django.utils.translation import gettext_lazy as _
import uuid
import datetime
from django.utils.timezone import now



class User(AbstractBaseUser , PermissionsMixin):
    
    email = models.EmailField(
        max_length=255,
        unique=True,
        verbose_name=_("email address"),
    )
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_verified = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateField(auto_now=True)
    last_login = models.DateTimeField(default=now)

    
    otp = models.CharField(max_length=6 , null=True, blank=True)

    USERNAME_FIELD = 'email'
    
    objects = UserManager()
    def __str__(self):
        return self.email
