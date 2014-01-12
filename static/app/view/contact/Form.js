Ext.define('ExtMVC.view.contact.Form', {
    extend: 'Ext.window.Window',
    alias: 'widget.contactform',

    requires: ['Ext.form.Panel', 'Ext.form.field.Text'],

    title: 'Edit/Create Contact',
    layout: 'fit',
    autoShow: true,
    width: 280,

    iconCls: 'icon-user',

    initComponent: function() {
        this.items = [{
            xtype: 'form',
            padding: '5 5 0 5',
            border: false,
            style: 'background-color: #fff;',

            fieldDefaults: {
                anchor: '100%',
                labelAlign: 'left',
                combineErrors: true,
                msgTarget: 'side'
            },

            items: [{
                xtype: 'textfield',
                name: 'id',
                fieldLabel: 'id',
                hidden: true
            }, {
                xtype: 'textfield',
                name: 'name',
                allowBlank: false,
                fieldLabel: 'Name',
                validator: function(val) {
                    if (!Ext.isEmpty(Ext.String.trim(val))) {
                        return true;
                    } else {
                        return "Value cannot be empty";
                    }
                }
            }, {
                xtype: 'textfield',
                name: 'phone',
                fieldLabel: 'Phone'
            }, {
                xtype: 'textfield',
                name: 'email',
                vtype: 'email',
                fieldLabel: 'Email'
            }]
        }];

        this.dockedItems = [{
            xtype: 'toolbar',
            dock: 'bottom',
            id: 'buttons',
            ui: 'footer',
            items: ['->', {
                iconCls: 'icon-save',
                text: 'Save',
                action: 'save'
            }, {
                iconCls: 'icon-reset',
                text: 'Cancel',
                scope: this,
                handler: this.close
            }]
        }];

        this.callParent(arguments);
    }
}); 