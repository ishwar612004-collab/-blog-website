from django.urls import path
from . import views

urlpatterns = [
    path('posts/', views.get_posts),
    path('add/', views.add_post),
]