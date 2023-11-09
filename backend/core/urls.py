from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('banners/', BannerView.as_view()),
    path('about/', AboutView.as_view()),
    path('propertytypes/', PropertytypesView.as_view()),
    path('property/', PropertyView.as_view()),
    path('agent/', AgentView.as_view()),
    path('agentmember/', AgentmemberView.as_view()),
    path('testimonial/', TestimonialView.as_view()),
    path('contact/', ContactView.as_view()),
]