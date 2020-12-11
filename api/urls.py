from django.urls import path
from . import views

urlpatterns = [
    path('get/<str:slug>/', views.view_paste, name="view_paste"),
    path('create_paste/', views.create_paste, name="create_paste"),
    path('get_lang/', views.get_lang, name="get_lang")
]
