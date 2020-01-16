from django.db import models
from django.contrib.auth import get_user_model
from enum import Enum


class DayOfWeek(Enum):
    MO = "Monday"
    TU = "Tuesday"
    WE = "Wednesday"
    TR = "Thursday"
    FR = "Friday"
    SA = "Saturday"
    SU = "Sunday"

class Subject(models.Model):
    name = models.CharField(max_length=50, blank=False)
    course = models.IntegerField(blank=False)
    description = models.TextField(blank=True)
    number_of_credits = models.IntegerField(blank=True) # кол-во зачетных единиц


class Period(models.Model):
    teacher = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, blank=True, null=True)
    group_number = models.CharField(max_length=50, blank=False, default=0) # 0 для лекции
    classroom = models.CharField(max_length=50, blank=False)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    number = models.IntegerField() # номер пары


class Day(models.Model):
    name = models.CharField(
        max_length=5,
        choices=[(tag.name, tag.value) for tag in DayOfWeek],
        unique=True
    )

    periods = models.ManyToManyField(Period) # все пары этого дня





