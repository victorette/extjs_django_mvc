from datetime import datetime
from django.conf import settings
from django.http import HttpResponse 

import json
import os


def JsonResponse(contents, status=200):
    return HttpResponse(contents, mimetype='application/json', status=status)

def JsonSuccess(params = {}):
    d = {"success":True}
    d.update(params)
    return JsonResponse(JSONserialise(d))
   
def JsonError(error = ''):
    return JsonResponse('{"success":false, "message":"%s"}' % JSONserialise(error))


def set_cookie(response, key, value, days_expire = 7):
    if days_expire is None:
        max_age = 365*24*60*60  #one year
    else:
        max_age = days_expire*24*60*60 
        
    expires = datetime.datetime.strftime(datetime.datetime.utcnow() + datetime.timedelta(seconds=max_age), "%a, %d-%b-%Y %H:%M:%S GMT")
    response.set_cookie(key, value, max_age=max_age, expires=expires, domain=settings.SESSION_COOKIE_DOMAIN, secure=settings.SESSION_COOKIE_SECURE or None)
    return response
    
    
def get_cookie(request, key):
    return request.COOKIES.get(key)

    
def DownloadLocalFile(InFile):
    import mimetypes
    file_name = os.path.basename(InFile)
    hinfile = open(InFile,'rb')
    response = HttpResponse(hinfile.read())
    response['Content-Disposition'] = 'attachment; filename=%s' % file_name
    response['Content-Type'] = mimetypes.guess_type(file_name)[0]
    return response
   
    
def JSONserialise( obj ):
    if not isinstance( obj , basestring ):
        try: 
            obj = json.dumps( obj )  
        except : obj = 'error JSONSerialise'
    return obj 
    