from django.shortcuts import render
from .models import Subject, Period, Day
from .serializers import SubjectSerializer, PeriodSerializer, DaySerializer
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework import permissions
from django.http import Http404
from rest_framework.response import Response


class SubjectList(generics.ListAPIView):
    serializer_class = SubjectSerializer

    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user

        if user.is_teacher:
            pass
            ## TODO
        elif user.is_student:
            return Subject.objects.filter(course=user.course)


class DayView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self, pk):
        try:
            return Day.objects.get(name=pk)
        except Day.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        day = self.get_object(pk)
        serializer = DaySerializer(day, context={'request' : request})
        return Response(serializer.data)

class DayList(generics.ListAPIView):
    serializer_class = DaySerializer

    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Day.objects.all()




