from django.db import models

# Create your models here.
class Contact(models.Model):
    email = models.CharField(max_length=200)
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=255)
    
    def as_json(self):
        return dict(
            id=self.pk,
            name=self.name,
            phone=self.phone, 
            email=self.email)
        
    def jsonToClass(self, json):
        self.name = json['name']
        self.phone = json['phone']
        self.email = json['email']