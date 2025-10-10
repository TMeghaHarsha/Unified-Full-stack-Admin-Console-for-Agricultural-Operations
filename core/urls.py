from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CropViewSet, VarietyViewSet, SeasonViewSet, RegionViewSet, PracticeViewSet, MediaViewSet

app_name = 'crop_list'

router = DefaultRouter()
router.register(r'crops', CropViewSet)
router.register(r'varieties', VarietyViewSet)
router.register(r'seasons', SeasonViewSet)
router.register(r'regions', RegionViewSet)
router.register(r'practices', PracticeViewSet)
router.register(r'media', MediaViewSet)

urlpatterns = [
    path('', include(router.urls)),
]