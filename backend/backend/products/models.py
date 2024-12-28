from django.db import models

class Product(models.Model):
    id = models.AutoField(primary_key=True)  # Auto incremented primary key
    title = models.CharField(max_length=255)
    price = models.FloatField()
    discount = models.IntegerField()
    description = models.TextField()
    category = models.CharField(max_length=255)
    image = models.ImageField(upload_to='product_images/')




# INSERT INTO quickbuy.products_product (title, price, discount, description, category, image)
# VALUES
#     ('Sari', 999.95, 9, 'Your can wear quickly.', 'clothing', 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'),
#     ('Samsung Laptop', 4999.99, 15, 'Better performance with 17" screen.', 'electronics', 'https://media.istockphoto.com/id/1359180038/photo/wristwatch.jpg?s=612x612&w=0&k=20&c=AWkZ-gaLo601vG5eiQcsjYRjCjDxZdGL7v-jWvvAjEM=');

# SELECT * FROM quickbuy.products_product;