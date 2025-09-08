from django.contrib import admin
from django.urls import path, include
from django.views.generic import RedirectView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('crops/', include('core.urls', namespace='crop_list')),
    path('', RedirectView.as_view(url='/admin/', permanent=False)),
]