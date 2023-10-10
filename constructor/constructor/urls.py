from django.contrib import admin
from django.urls import include, path, re_path
from django.conf.urls.static import static
from django.conf import settings
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from backend.views import *

urlpatterns = [
    re_path(r'^admin/', admin.site.urls),
    re_path(r'^api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    re_path(r'^api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    re_path(r'^api/', include('backend.urls')),
    re_path(r'^api/logout/', LogoutViewSet.as_view(), name ='logout'),
]
