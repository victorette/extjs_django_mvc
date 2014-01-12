Ext.define('ExtMVC.store.Contacts', {
    extend: 'Ext.data.Store',
    model: 'ExtMVC.model.Contact',
    autoLoad: true,
    pageSize: 25,
    autoLoad: {start: 0, limit: 25},
 
    proxy: {
        type: 'ajax',
        api: {
            create: '/crud/createContact/',
            read: '/crud/listContacts/',
            update: '/crud/updateContact/',
            destroy: '/crud/deleteContact/',
        },
        reader: {
            type: 'json',
            root: 'contacts',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            encode: true,
            root: 'contacts'
        }
    }
});