from rest_framework import viewsets, filters
from .models import Crop, Variety, Season, Region, Practice, Media
from .serializers import CropSerializer, VarietySerializer, SeasonSerializer, RegionSerializer, PracticeSerializer, MediaSerializer
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.pagination import PageNumberPagination

class StandardResultsSetPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100

class CropViewSet(viewsets.ModelViewSet):
    queryset = Crop.objects.all()
    serializer_class = CropSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['name']
    search_fields = ['name', 'description']
    pagination_class = StandardResultsSetPagination

class VarietyViewSet(viewsets.ModelViewSet):
    queryset = Variety.objects.all()
    serializer_class = VarietySerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['crop']

class SeasonViewSet(viewsets.ModelViewSet):
    queryset = Season.objects.all()
    serializer_class = SeasonSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['name']

class RegionViewSet(viewsets.ModelViewSet):
    queryset = Region.objects.all()
    serializer_class = RegionSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['name']

class PracticeViewSet(viewsets.ModelViewSet):
    queryset = Practice.objects.all()
    serializer_class = PracticeSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['crop', 'created_by']

class MediaViewSet(viewsets.ModelViewSet):
    queryset = Media.objects.all()
    serializer_class = MediaSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['practice', 'crop']