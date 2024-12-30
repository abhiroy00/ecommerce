from django.db import models

# Create your models here.
from django.db import models

class Contact(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    email = models.FloatField(max_length=100)
    message  = models.TextField(max_length=100)