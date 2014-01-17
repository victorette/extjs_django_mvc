Ext.Loader.setConfig({enabled: true});

Ext.application({
    name: 'ExtMVC',
    appFolder: 'static/app',

    controllers: ['Contacts', 'Menu'],

    autoCreateViewport: true,

    launch: function() {
        // Add csrf token to every ajax request
        var token = Ext.util.Cookies.get('csrftoken');
        if (!token) {
            Ext.Error.raise("Missing csrftoken cookie");
        } else {
            Ext.Ajax.defaultHeaders = Ext.apply(Ext.Ajax.defaultHeaders || {}, {
                'X-CSRFToken': token
            });
        }
    }
}); 