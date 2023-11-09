from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework import status
from django.core.exceptions import ObjectDoesNotExist
from django.core.mail import send_mail

# Create your views here.


class BannerView(APIView):
    def get(self, request):
        banner_obj = Banner.objects.all()
        banner_serializers = BannerSerializer(banner_obj, many=True, context={'request':request}).data
        return Response(banner_serializers)


class AboutView(APIView):
    def get(self, request):
        about_obj = About.objects.all()
        about_serializers = AboutSerializer(about_obj, many=True, context={'request':request}).data
        return Response(about_serializers)



class PropertytypesView(APIView):
    def get(self, request):
        types_obj = Propertytypes.objects.all()
        types_serializers = PropertytypesSerializer(types_obj, many=True, context={'request':request}).data
        return Response(types_serializers)


class PropertyView(APIView):
    def get(self, request):
        property_obj = Property.objects.all()
        property_serializers = PropertySerializer(property_obj, many=True, context={'request':request}).data
        return Response(property_serializers)



class AgentView(APIView):
    def get(self, request):
        agent_obj = Agent.objects.all()
        agent_serializers = AgentSerializer(agent_obj, many=True, context={'request':request}).data
        return Response(agent_serializers)



class AgentmemberView(APIView):
    def get(self, request):
        agent_obj = Agentmember.objects.all()
        agent_serializers = AgentmemberSerializer(agent_obj, many=True, context={'request':request}).data
        return Response(agent_serializers)




class TestimonialView(APIView):
    def get(self, request):
        test_obj = Testimonial.objects.all()
        test_serializers = TestimonialSerializer(test_obj, many=True, context={'request':request}).data
        return Response(test_serializers)




class ContactView(APIView):
    permission_classes = [IsAuthenticated, ]
    authentication_classes = [TokenAuthentication, ]

    def post(self, request, format=None):
        data = self.request.data
        response = 'You will be contacted shortly.'

        try:
            send_mail(data['subject'],
                      'Name: ' + data['name'] + '\nEmail: ' + data['email'] +
                      '\n\nMessage:\n' + data['message'] + '\n\n' + response,
                      '19bcp101.nepal@gmail.com',
                      [data['email'], 'nothing3669@gmail.com'],
                      fail_silently=False)

            contact = Contact(name=data['name'],
                              email=data['email'],
                              subject=data['subject'],
                              message=data['message'])
            contact.save()

            return Response({'success': 'Message sent successfully'})

        except:
            return Response({'error': 'Message failed to send'})



