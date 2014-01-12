Ext.define('ExtMVC.view.Viewport', {
    extend: 'Ext.Viewport',
    layout: 'fit',
 
    requires: [
        'ExtMVC.view.contact.Grid',
        'ExtMVC.view.contact.Form'
    ],
 
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            items: [
                {
                    xtype: 'contactgrid'
                }
            ]
        });
 
        me.callParent(arguments);
    }
});