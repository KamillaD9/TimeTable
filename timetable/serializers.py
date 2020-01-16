from rest_framework import serializers
from .models import Subject, Period, Day

class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = '__all__'


class PeriodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Period
        fields = '__all__'

class DaySerializer(serializers.ModelSerializer):
    periods = serializers.SerializerMethodField('get_periods')

    def get_periods(self, day):
        user = self.context['request'].user


        if user.is_anonymous:
            group = self.context['group']
            qs = Period.objects.filter(group_number=group, day=day)
        elif user.is_student:
            qs = Period.objects.filter(group_number=user.group_number, day=day)
        elif user.is_teacher:
            qs = Period.objects.filter(teacher=user, day=day)

        serializer = PeriodSerializer(instance=qs, many=True)
        return serializer.data


    class Meta:
        model = Day
        fields = '__all__'

