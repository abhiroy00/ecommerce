from django.shortcuts import render
from django.http import JsonResponse
from .models import Product
from .serializer import ProductSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.

@api_view(['GET','POST'])
    
def product(request):
    if request.method=='GET':
        product=Product.objects.all()
        ProductSerializer_data = ProductSerializer(product, many=True)
        return Response({'status':200, 'data':ProductSerializer_data.data})