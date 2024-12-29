from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Product
from .serializer import ProductSerializer

@api_view(['GET', 'POST'])
def product(request):
    try:
        if request.method == 'GET':
            # Fetch all products
            products = Product.objects.all()

            # Serialize the products with the request context
            product_serializer = ProductSerializer(products, many=True, context={'request': request})

            return Response({
                'status': 200,
                'data': product_serializer.data  # This should include the 'image_url' field from the serializer
            })

        elif request.method == 'POST':
            # Deserialize the incoming data for creating a new product
            product_serializer = ProductSerializer(data=request.data, context={'request': request})

            if product_serializer.is_valid():
                # Save the product with the uploaded image
                product = product_serializer.save()

                # Return a successful response with the created product data
                return Response({
                    'status': 201,
                    'message': 'Product created successfully',
                    'data': product_serializer.data
                }, status=status.HTTP_201_CREATED)

            else:
                return Response({
                    'status': 400,
                    'errors': product_serializer.errors
                }, status=status.HTTP_400_BAD_REQUEST)

    except Exception as e:
        return Response({
            'status': 500,
            'message': str(e)
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
