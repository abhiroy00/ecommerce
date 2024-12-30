from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import *
from .serializers import *

@api_view(['GET', 'POST'])
def contact_list(request):
    if request.method == 'GET':
        contacts = Contact.objects.all()
        serializer = ContactSerializer  (contacts, many=True)  # many=True because we are serializing multiple objects
        return Response({
                'status': 200,
                'data': serializer.data  # This should include the 'image_url' field from the serializer
            })

    elif request.method == 'POST':
        # Deserialize the incoming JSON data to create a Product instance
        serializer = ContactSerializer  (data=request.data)
        if serializer.is_valid():
            serializer.save()  # Saves the new product
            return Response({
                    'status': 201,
                    'message': 'Product created successfully',
                    'data': serializer.data
                }, status=status.HTTP_201_CREATED)
        else:    
            return Response({
                'status': 400,
                'errors': serializer.errors
            }, status=status.HTTP_400_BAD_REQUEST)