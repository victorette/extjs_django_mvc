from django.conf.urls import patterns, url
from crud.views import createContact, listContacts, updateContact, deleteContact

urlpatterns = patterns('',
    url(r'createContact/$', createContact),
    url(r'listContacts/$', listContacts),
    url(r'updateContact/$', updateContact),
    url(r'deleteContact/$', deleteContact),
)
