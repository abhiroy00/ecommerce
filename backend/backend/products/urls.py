from django.contrib import admin
from django.urls import path
from .views import product

urlpatterns = [
    path("product/", product, name="product" )
]