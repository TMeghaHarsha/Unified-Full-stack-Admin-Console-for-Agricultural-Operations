from rest_framework import serializers
from .models import Crop, Variety, Season, Region, Practice, Media

class CropSerializer(serializers.ModelSerializer):
    class Meta:
        model = Crop
        fields = '__all__'

class VarietySerializer(serializers.ModelSerializer):
    class Meta:
        model = Variety
        fields = '__all__'

class SeasonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Season
        fields = '__all__'

class RegionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Region
        fields = '__all__'

class PracticeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Practice
        fields = '__all__'

class MediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Media
        fields = '__all__'