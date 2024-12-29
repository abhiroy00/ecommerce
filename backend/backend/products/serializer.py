from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = '__all__'

    def get_image_url(self, obj):
        """
        Method to build the full URL for the image field.
        """
        request = self.context.get('request')  # Get the request object from context
        if obj.image:
            return request.build_absolute_uri(obj.image.url)  # Build the absolute URL for the image
        return None
