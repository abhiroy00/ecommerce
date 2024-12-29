
from .models import Product
from .serializer import ProductSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET', 'POST'])
def product(request):
    try:
        if request.method == 'GET':
            # Fetch all products
            products = Product.objects.all()

            # Serialize the products
            product_serializer = ProductSerializer(products, many=True)

            # Return a successful response with the serialized data
            return Response({
                'status': 200,
                'data': product_serializer.data  # This includes the 'image_url' field from the serializer
            })

        elif request.method == 'POST':
            # Deserialize the incoming data for creating a new product
            product_serializer = ProductSerializer(data=request.data)

            # Validate and save the product if data is valid
            if product_serializer.is_valid():
                product_serializer.save()
                return Response({
                    'status': 201,
                    'message': 'Product created successfully',
                    'data': product_serializer.data  # Return the serialized data of the created product (including image_url)
                })
            else:
                # If validation fails, return errors
                return Response({
                    'status': 400,
                    'errors': product_serializer.errors
                })

    except Exception as e:
        # Handle any unexpected errors
        return Response({
            'status': 500,
            'message': str(e)
        })


    
    