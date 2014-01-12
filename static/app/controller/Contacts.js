Ext.define('ExtMVC.controller.Contacts', {
    extend: 'Ext.app.Controller',
 
    stores: ['Contacts'],
 
    models: ['Contact'],
 
    views: ['contact.Form', 'contact.Grid'],
 
    refs: [{
            ref: 'contactPanel',
            selector: 'panel'
        },{
            ref: 'contactGrid',
            selector: 'grid'
        }
    ],
 
    init: function() {
        this.control({
            'contactgrid dataview': {
                itemdblclick: this.editContact
            },
            'contactgrid button[action=add]': {
                click: this.editContact
            },
            'contactgrid button[action=delete]': {
                click: this.deleteContact
            },
            'contactform button[action=save]': {
                click: this.updateContact
            }
        });
    },
 
    editContact: function(grid, record) {
        var edit = Ext.create('ExtMVC.view.contact.Form').show();
 
        if(record){
            edit.down('form').loadRecord(record);
        }
    },
 
    updateContact: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();
 
        var newContact = false;
 		if (form.getForm().isValid()){
	        if (values.id > 0){
	            record.set(values);
	        } else{
	            record = Ext.create('ExtMVC.model.Contact');
	            record.set(values);
	            this.getContactsStore().add(record);
	            newContact = true;
	        }
	        
	        var store = this.getContactsStore();
	        store.sync({
		        success: function(batch, options){
	        		win.close();
		        },
		        failure: function(batch, options) {
		        	Ext.Msg.alert('Failed', batch.proxy.getReader().jsonData.message);
		        },
			    scope: this
		    });
	 
	        if (newContact){ //reload for update
	            this.getContactsStore().load();
	        }
 		}
    },
 
    deleteContact: function(button) {
 
        var grid = this.getContactGrid(),
        record = grid.getSelectionModel().getSelection(),
        store = this.getContactsStore();
 
        store.remove(record);
        store.sync({
		        failure: function(batch, options) {
		        	Ext.Msg.alert('Failed', batch.proxy.getReader().jsonData.message);
		        },
			    scope: this
		    });
        store.load();
 
        //do update
        this.getContactsStore().load();
    }
});