from django.conf.urls import patterns, include, url
from django.views.generic.simple import direct_to_template
from settings import PPATH

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    url(r'^$', direct_to_template, { 'template': 'index.html' }),
    url(r'^crud/', include('crud.urls')),
    
    url(r'^admin/', include(admin.site.urls)),
    
    #    Used for load json configuration files
    url(r'static/(?P<path>.*)$', 'django.views.static.serve',{'document_root': PPATH + '/static'}),
    url(r'resources/(?P<path>.*)$', 'django.views.static.serve',{'document_root': PPATH + '/static'}),
    url(r'media/(?P<path>.*)$', 'django.views.static.serve',{'document_root': PPATH + '/static'}),
)
