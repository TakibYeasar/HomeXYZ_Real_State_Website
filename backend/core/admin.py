from django.contrib import admin

from .models import (
    Banner,
    About,
    Propertytypes,
    Faq,
    Property,
    Agent,
    Agentmember,
    Testimonial,
    Contact,
)

admin.site.register([
    Banner,
    About,
    Propertytypes,
    Faq,
    Property,
    Agent,
    Agentmember,
    Testimonial,
    Contact,
])