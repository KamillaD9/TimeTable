from django.shortcuts import render, redirect, HttpResponseRedirect, HttpResponse
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import login, logout
from .models import AuthBackend
from .forms import UserRegistrationForm
from .serializers import UserSerializer
from rest_framework import permissions
from rest_framework.generics import CreateAPIView
from django.contrib.auth import get_user_model

def user_register(request):
    if request.method == 'POST':
        user_form = UserRegistrationForm(request.POST)
        if user_form.is_valid():
            new_user = user_form.save(commit=False)
            new_user.set_password(user_form.cleaned_data['password'])
            new_user.save()
            return redirect('login')
    else:
        user_form = UserRegistrationForm()
    return render(request, 'users/registration.html', {'form': user_form})

def user_login(request):
    if request.method == 'POST':
        login_form = AuthenticationForm(request.POST)
        username = request.POST['username']
        password = request.POST['password']
        authBackend = AuthBackend()
        user = authBackend.authenticate(request=request, username=username, password=password)
        if user:
            # Is the account active? It could have been disabled.
            if user.is_active:
                login(request, user)
        return HttpResponse("ok", content_type="text/plain", status=200)
    else:
        login_form = AuthenticationForm()
    return render(request, 'users/login.html', {'form': login_form})

def user_logout(request):
    logout(request) #use default logout from django.contrib.auth
    return HttpResponse("ok", content_type="text/plain", status=200)