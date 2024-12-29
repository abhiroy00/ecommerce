from django.db import models

class Product(models.Model):
    id = models.AutoField(primary_key=True)  # Auto incremented primary key
    title = models.CharField(max_length=255)
    price = models.FloatField()
    discount = models.IntegerField()
    description = models.TextField()
    category = models.CharField(max_length=255)
    image = models.ImageField(upload_to='product_images/')




