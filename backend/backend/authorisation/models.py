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

    username = None
    
    email = models.EmailField(
        max_length=255,
        unique=True,
        verbose_name=_("email address"),
    )

    first_name = models.CharField(max_length=100, verbose_name=_("Enter the First name here:"))
    last_name = models.CharField(max_length=100, verbose_name=_("Enter the Last name here"))

    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_verified = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateField(auto_now=True)
    last_login = models.DateTimeField(default=now)

    
    otp = models.CharField(max_length=6 , null=True, blank=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ["first_name", "last_name"]
    
    objects = UserManager()
    
    def get_full_name(self):
        return f"{self.first_name} {self.last_name}"

    def __str__(self):
        return self.email
