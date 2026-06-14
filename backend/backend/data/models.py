from django.db import models

# Create your models here.
class Data(models.Model):
    kol = models.FloatField()
    viral = models.FloatField()
    hamsham = models.FloatField()
    def __str__(self):
        return f"{self.kol}"