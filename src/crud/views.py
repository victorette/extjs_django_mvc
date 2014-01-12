from django.http import HttpResponse
import django.utils.simplejson as json
from utilsWeb import JsonError, JsonSuccess 
from models import Contact

def createContact(request):#POST
    if request.method != 'POST':
        return JsonError( 'invalid message' ) 

    json_data = request.POST['contacts']
    data = json.loads(json_data)
    newContact = Contact()
    try:
        newContact.jsonToClass(data)
        newContact.save()
        return JsonSuccess( { 'message': 'Ok' } )
    except:
        return JsonError( 'Error on saving contact' )

def listContacts(request):#GET
    success = False
    start = request.GET['start'];
    limit = request.GET['limit'];
    resultset = Contact.objects.all()[start:start+limit]
    total = Contact.objects.count()
    if total > 0:
        success = True
        
    contacts = [ob.as_json() for ob in resultset]
    jsondict = {
        'success': success,
        'total': total,
        'contacts' : contacts
    }
    
    json_data = json.dumps(jsondict)
    return HttpResponse(json_data, mimetype="application/json")

def updateContact(request):#POST
    if request.method != 'POST':
        return JsonError( 'invalid message' ) 
    
    json_data = request.POST['contacts']
    data = json.loads(json_data)
    contact = Contact.objects.get(pk=data['id']);
    try:
        contact.jsonToClass(data)
        contact.save()
        return JsonSuccess( { 'message': 'Ok' } )
    except:
        return JsonError('Unable to edit contact')

def deleteContact(request):#POST
    if request.method != 'POST':
        return JsonError( 'invalid message' ) 
    
    json_data = request.POST['contacts']
    data = json.loads(json_data)
    
    contact = Contact.objects.get(pk=data['id']);
    try:
        contact.delete()
        return JsonSuccess( { 'message': 'Ok' } )
    except:
        return JsonError('Unable to delete contact')
    