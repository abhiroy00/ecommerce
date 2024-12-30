from django.urls import path
from .views import contact_list


urlpatterns = [
    path("contactus/", contact_list, name="contact" )
]