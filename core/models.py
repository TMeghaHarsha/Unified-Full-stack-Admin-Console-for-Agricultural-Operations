from django.db import models
from django.contrib.auth.models import AbstractUser

# Existing RBAC Models
class Role(models.Model):
    name = models.CharField(max_length=50)
    permissions = models.ManyToManyField('auth.Permission')

class CustomUser(AbstractUser):
    role = models.ForeignKey(Role, on_delete=models.SET_NULL, null=True)

# New Models for Week 5
class Crop(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Variety(models.Model):
    crop = models.ForeignKey(Crop, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)

    def __str__(self):
        return f"{self.name} ({self.crop.name})"

class Season(models.Model):
    name = models.CharField(max_length=50, unique=True)
    start_month = models.IntegerField()
    end_month = models.IntegerField()

    def __str__(self):
        return self.name

class Region(models.Model):
    name = models.CharField(max_length=100, unique=True)
    latitude = models.FloatField()
    longitude = models.FloatField()

    def __str__(self):
        return self.name

class Practice(models.Model):
    crop = models.ForeignKey(Crop, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    created_by = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Media(models.Model):
    practice = models.ForeignKey(Practice, on_delete=models.CASCADE, null=True, blank=True)
    crop = models.ForeignKey(Crop, on_delete=models.CASCADE, null=True, blank=True)
    file = models.FileField(upload_to='media/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Media for {self.practice or self.crop}"