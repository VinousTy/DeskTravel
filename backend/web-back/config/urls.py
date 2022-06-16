from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('authen/', include('djoser.urls.jwt')),
    path('auth/', include('drf_social_oauth2.urls', namespace='drf')),
    path('rest-auth/', include('rest_auth.urls')),
    path('password/reset/', include('django_rest_passwordreset.urls',
         namespace='password_reset')),
]
