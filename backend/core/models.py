from django.db import models
from authapi.models import CustomUser
from django.shortcuts import reverse

# Create your models here.

class Banner(models.Model):
    image = models.ImageField(upload_to='banner/')
    title = models.CharField(max_length=255, blank=True, null=True)
    desc = models.TextField(blank=True, null=True)
    slug = models.SlugField(blank=True, null=True)
    created = models.DateField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'Banners'
        ordering = ('-created',)

    def __str__(self):
        return self.title
    
    def get_absolute_url(self):
        return reverse("core:banner", kwargs={
            'slug': self.slug
        })


class About(models.Model):
    image = models.ImageField(upload_to='about/', blank=True, null=True)
    title = models.CharField(max_length=255, blank=True, null=True)
    desc = models.TextField(blank=True, null=True)
    
    class Meta:
        verbose_name_plural = 'About'

    def __str__(self):
        return self.title


class Propertytypes(models.Model):
    icon = models.ImageField(upload_to='category/', blank=True, null=True)
    title = models.CharField(max_length=255, blank=True, null=True)
    slug = models.SlugField(blank=True, null=True)
    created = models.DateField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'Property Types'
        ordering = ('-created',)

    def __str__(self):
        return self.title
    
    def get_absolute_url(self):
        return reverse("core:propertytypes", kwargs={
            'slug': self.slug
        })


class Faq(models.Model):
    question = models.CharField(max_length=255, blank=True, null=True)
    answer = models.TextField(blank=True, null=True)
    created = models.DateField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'Faq'
        ordering = ('-created',)
    
    def __str__(self):
        return self.question



class Property(models.Model):
    category = models.ManyToManyField(Propertytypes, blank=True, null=True)
    image = models.ImageField(upload_to='property/', blank=True, null=True)
    title = models.CharField(max_length=255, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    price = models.CharField(max_length=255, blank=True, null=True)
    sqft = models.CharField(max_length=255, blank=True, null=True)
    bed = models.CharField(max_length=255, blank=True, null=True)
    bath = models.CharField(max_length=255, blank=True, null=True)
    faq = models.ManyToManyField(Faq, blank=True, null=True)
    slug = models.SlugField(blank=True, null=True)
    created = models.DateField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'Properties'
        ordering = ('-created',)
    
    def __str__(self):
        return self.title
    
    def get_absolute_url(self):
        return reverse("core:properties", kwargs={
            'slug': self.slug
        })


class Agent(models.Model):
    image = models.ImageField(upload_to='agents/', blank=True, null=True)
    
    class Meta:
        verbose_name_plural = 'Agent'
    
    def __str__(self):
        return self.image

class Agentmember(models.Model):
    image = models.ImageField(upload_to='agents/', blank=True, null=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    designation = models.CharField(max_length=255, blank=True, null=True)
    facebook = models.CharField(max_length=255, blank=True, null=True)
    twitter = models.CharField(max_length=255, blank=True, null=True)
    instagram = models.CharField(max_length=255, blank=True, null=True)
    slug = models.SlugField(blank=True, null=True)
    created = models.DateField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'Agentmember'
        ordering = ('-created',)
    
    def __str__(self):
        return self.name
    
    def get_absolute_url(self):
        return reverse("core:agentmember", kwargs={
            'slug': self.slug
        })
    

class Testimonial(models.Model):
    image = models.ImageField(upload_to='testimonial/', blank=True, null=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    profession = models.CharField(max_length=255, blank=True, null=True)
    message = models.TextField(blank=True, null=True)
    slug = models.SlugField(blank=True, null=True)
    created = models.DateField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'Testimonial'
        ordering = ('-created',)
    
    def __str__(self):
        return self.name
    
    def get_absolute_url(self):
        return reverse("core:testimonial", kwargs={
            'slug': self.slug
        })


class Contact(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    email = models.EmailField(max_length=255, blank=True, null=True)
    subject = models.CharField(max_length=255, blank=True, null=True)
    message = models.TextField(blank=True, null=True)
    
    class Meta:
        verbose_name_plural = 'Contact'
    
    def __str__(self):
        return self.email
    
    def get_absolute_url(self):
        return reverse("core:contact", kwargs={
            'slug': self.slug
        })







