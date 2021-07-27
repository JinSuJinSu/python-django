from django.contrib import admin
from django.urls import path,include
from . import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('', views.index, name='index'),
    path('basic_visual/', views.basic_visual, name='basic_visual'),
    path('visual_sum/', views.visual_sum, name='visual_sum'),
    path('visual3/', views.visual3, name='visual3'),
    path('visual4/', views.visual4, name='visual4'),
    path('data_intro/', views.data_intro, name='data_intro'),
    path('data_process/', views.data_process, name='data_process'),
    path('data_anal/', views.data_anal, name='data_anal'),
    path('data_result/', views.data_result, name='data_result'),


]
