from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Dummy login
@api_view(["POST"])
def login(request):
    role = request.data.get("role", "super-admin")  # take role from frontend
    user = {
        "id": 1,
        "name": "Vivek",
        "email": "vivek@example.com",
        "role": role,
        "token": "dummy-jwt-token-12345"
    }
    return Response(user)

@api_view(["POST"])
def logout(request):
    return Response({"message": "Logged out successfully"})


@api_view(["GET"])
def dashboard(request):
    return Response({"message": "Dashboard data placeholder"})

@api_view(["GET"])
def crops(request):
    return Response({"crops": ["Wheat", "Rice", "Maize"]})

@api_view(["GET"])
def subscriptions(request):
    return Response({"subscriptions": ["Basic", "Premium", "Enterprise"]})

@api_view(["GET"])
def teams(request):
    return Response({"teams": [{"id": 1, "name": "Field Team"}]})

@api_view(["GET"])
def tasks(request):
    return Response({"tasks": [{"id": 101, "title": "Soil Check", "status": "Pending"}]})

@api_view(["GET"])
def media(request):
    return Response({"media": ["image1.png", "image2.png"]})

@api_view(["GET"])
def tickets(request):
    return Response({"tickets": [{"id": 1, "subject": "Pesticide Issue"}]})

@api_view(["GET"])
def knowledge(request):
    return Response({"articles": ["How to irrigate?", "Fertilizer guide"]})

@api_view(["GET"])
def deployments(request):
    return Response({"deployments": ["v1.0", "v1.1"]})

@api_view(["GET"])
def apis(request):
    return Response({"apis": ["Weather API", "Soil Data API"]})

@api_view(["GET"])
def logs(request):
    return Response({"logs": ["System started", "DB connected"]})

@api_view(["GET"])
def plans(request):
    return Response({"plans": ["Monthly", "Yearly"]})

@api_view(["GET"])
def invoices(request):
    return Response({"invoices": [{"id": 1001, "amount": 2500}]})

@api_view(["GET"])
def clients(request):
    return Response({"clients": [{"id": 501, "name": "Farmer Group A"}]})

@api_view(["GET"])
def reports(request):
    return Response({"reports": ["Yield Report", "Soil Report"]})

@api_view(["GET"])
def notifications(request):
    return Response({"notifications": ["New crop alert", "Task assigned"]})

@api_view(["GET"])
def analytics(request):
    return Response({"analytics": {"activeUsers": 50, "sales": 2000}})

@api_view(["GET"])
def users(request):
    return Response({"users": [{"id": 1, "name": "Vivek", "role": "super-admin"}]})

@api_view(["GET"])
def settings(request):
    return Response({"settings": {"theme": "dark", "language": "en"}})

@api_view(["GET"])
def profile(request):
    return Response({"profile": {"name": "Vivek", "email": "vivek@example.com"}})



