from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .permissions import HasPermission

# Create your views here.
@api_view(['GET'])
@permission_classes([HasPermission])
def crop_list(request):
    return Response({"message": "Crop list for authorized users"})