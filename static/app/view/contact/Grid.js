Ext.define('ExtMVC.view.contact.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.contactgrid',

    requires: ['Ext.toolbar.Paging'],

    iconCls: 'icon-grid',

    title: 'Contacts',
    store: 'Contacts',

    columns: [{
        header: "NAME",
        width: 170,
        flex: 1,
        dataIndex: 'name'
    }, {
        header: "PHONE",
        width: 160,
        flex: 1,
        dataIndex: 'phone'
    }, {
        header: "EMAIL",
        width: 170,
        flex: 1,
        dataIndex: 'email'
    }],

    initComponent: function() {
        this.dockedItems = [{
            xtype: 'toolbar',
            items: [{
                iconCls: 'icon-save',
                text: 'Add',
                action: 'add'
            }, {
                iconCls: 'icon-delete',
                text: 'Delete',
                action: 'delete'
            }]
        }, {
            xtype: 'pagingtoolbar',
            dock: 'top',
            store: 'Contacts',
            displayInfo: true,
            displayMsg: 'Showing Contacts {0} - {1} of {2}',
            emptyMsg: "No contact found."
        }];
        this.callParent(arguments);
    }
}); 