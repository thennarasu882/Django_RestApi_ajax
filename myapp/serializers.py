from rest_framework import serializers
from .models import products


class product_serializer(serializers.ModelSerializer):
    class Meta:
        model = products
        fields = "__all__"
