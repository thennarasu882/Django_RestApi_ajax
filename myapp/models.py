from django.db import models
from django.db.models.fields import CharField

# Create your models here.


class products(models.Model):
    title = models.CharField(max_length=30)
    price = models.IntegerField()
    category = models.CharField(max_length=30)
    image = models.CharField(max_length=400)
    description = models.TextField(max_length=500)
    is_offer_available = models.BooleanField()

    def __str__(self):
        return (self.title)
