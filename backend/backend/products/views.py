from django.shortcuts import render
from django.http import JsonResponse
from .models import Product
from .serializer import ProductSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

@api_view(['GET', 'POST'])
def product(request):
    try:
        if request.method == 'GET':
           
            products = Product.objects.all()
           
            product_serializer = ProductSerializer(products, many=True)
            
            return Response({'status': 200, 'data': product_serializer.data})

        elif request.method == 'POST':
            product_serializer = ProductSerializer(data=request.data)
            if product_serializer.is_valid():
                product_serializer.save()  
                return Response({'status': 201, 'message': 'Product created successfully'})
            else:
                return Response({'status': 400, 'errors': product_serializer.errors})
    
    except Exception as e:
        return Response({'status': 500, 'message': str(e)})


    
    