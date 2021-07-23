from django.urls import path, include
from rest_framework import routers
from .views import productsViewSet, index
#from myapp.views import details, index

router = routers.DefaultRouter()
router.register(r'products', productsViewSet)

urlpatterns = [
    path('', index),
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))


    # path('', index),
    # path('<str:pk>/', details, name="details")
]
