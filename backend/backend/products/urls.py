from django.contrib import admin
from django.urls import path
from .views import product

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("product/", product, name="product" )
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)