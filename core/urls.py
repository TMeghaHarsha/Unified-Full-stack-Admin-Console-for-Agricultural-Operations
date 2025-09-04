from django.urls import path
from . import views

urlpatterns = [
    path('crops/', views.crop_list, name='crop_list'),
]