from rest_framework import serializers
from .models import *



class BannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Banner
        fields = "__all__"

    def imageurl(self, obj):
        request = self.obj.get('request')
        return request.url("image")


class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = "__all__"

    def imageurl(self, obj):
        request = self.obj.get('request')
        return request.url("image")


class PropertytypesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Propertytypes
        fields = "__all__"

    def imageurl(self, obj):
        request = self.obj.get('request')
        return request.url("image")


class FaqSerializer(serializers.ModelSerializer):
    class Meta:
        model = Faq
        fields = "__all__"



class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = "__all__"
        
    def to_representation(self, instance):
        response = super().to_representation(instance)
        request = self.context.get('request')
        response['faq'] = PropertySerializer(instance.faq, context={'request':request}).data
        return response


class AgentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Agent
        fields = "__all__"

    def imageurl(self, obj):
        request = self.obj.get('request')
        return request.url("image")

class AgentmemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Agentmember
        fields = "__all__"

    def imageurl(self, obj):
        request = self.obj.get('request')
        return request.url("image")


class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = "__all__"

    def imageurl(self, obj):
        request = self.obj.get('request')
        return request.url("image")



class ContactSerialier(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'


