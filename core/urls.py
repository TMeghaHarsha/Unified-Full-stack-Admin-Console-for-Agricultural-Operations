from django.urls import path
from . import views

app_name = 'core'

urlpatterns = [
    path('crops/', views.crop_list, name='crop_list'),
]