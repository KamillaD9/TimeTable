from django.conf.urls import include
from django.urls import path, re_path
from .views import CreateUserView
from timetable.views import SubjectList, DayView, DayList

urlpatterns = [
    path('users/', include('users.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/register', CreateUserView.as_view()),
    path('subjects/', SubjectList.as_view()),
    path('day/<slug:pk>/', DayView.as_view()),
    path('timetable/', DayList.as_view())
]