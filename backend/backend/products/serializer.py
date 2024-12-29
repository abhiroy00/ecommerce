from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = ['id', 'title', 'price', 'discount', 'description', 'category', 'image', 'image_url']

    def get_image_url(self, obj):
        request = self.context.get('request')  # Get the request object from context
        if request and obj.image:
            return request.build_absolute_uri(obj.image.url)
        return None
