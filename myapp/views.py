from .models import products
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import product_serializer
from rest_framework import viewsets
# Create your views here.


def index(request):
    return render(request, "index.html")


class productsViewSet(viewsets.ModelViewSet):
    queryset = products.objects.all()
    serializer_class = product_serializer


# def one_product_info(request, pk):
#     data = "/apiproducts/"+str(pk)
#     return render(request, "one_product.html", {"data": data})


# def index(request):
#     products_data = products.objects.all()
#     serializer = product_serializer(products_data, many=True)
#     return Response(serializer.data)


# def details(request, pk):
#     products_data = products.objects.get(id=pk)
#     serializer = product_serializer(products_data, many=False)
#     return Response(serializer.data)


# @api_view(["GET"])
# def all_products(request):
#     data = products.objects.all()
#     if data:
#         serialized = product_serializer(data, many=True)
#         return Response(serialized.data)
#     else:
#         return Response({})


# @api_view(["GET"])
# def get_product(request, pk):
#     data = products.objects.all()
#     data = data.filter(id=pk)
#     if data:
#         serialized = product_serializer(data, many=True)
#         return Response(serialized.data)
#     else:
#         return Response({})
