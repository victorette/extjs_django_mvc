Ext.define('ExtMVC.view.Viewport', {
    extend: 'Ext.Viewport',
    layout: 'fit',

    requires: [
    	'ExtMVC.view.contact.Grid', 
    	'ExtMVC.view.contact.Form',
    	'ExtMVC.view.menu.Accordion',
    	'ExtMVC.view.MainPanel'
    ],

    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            layout: 'border',
            autoRender: true,
            padding: 5,
            defaults: {
                split: true
            },
            items: [
            {
                xtype: 'mainmenu',
                width: 185,
                collapsible: true,
                region: 'west'
            }, {
                xtype: 'mainpanel', //contactgrid',
                region: 'center'
            }, 
            this.createFooterPanel()]
        });

        me.callParent(arguments);
    },
    createFooterPanel: function() {

        var statusBar = Ext.create('Ext.toolbar.Toolbar', {
            region: 'south',
            split: false,
            collapsible: false
        });
        return statusBar;
    }
}); 