/**
 * @author Giovanni Victorette
 */
Ext.define('ExtMVC.controller.Menu', {
    extend: 'Ext.app.Controller',
    views: ['menu.Accordion', 'menu.Item'],
    refs: [{
        ref: 'mainPanel',
        selector: 'mainpanel'
    }],
    init: function(application) {
        this.control({
            "mainmenu": {
                render: this.onPanelRender
            },
            "mainmenuitem": {
                select: this.onTreepanelSelect,
                itemclick: this.onTreepanelItemClick,
                itemdblclick: this.onTreepanelItemDoubleClick
            }
        });
    },
    onPanelRender: function(abstractcomponent, options) {
        var menuPanel = Ext.ComponentQuery.query('mainmenu')[0];

        // TODO This should be replaced to get a dynamic Menu
        var menu = Ext.create('ExtMVC.view.menu.Item', {
            title: 'Example',
            iconCls: 'icon-grid'
        });
        menu.getRootNode().appendChild({
            text: 'Contacts',
            leaf: true,
            iconCls: 'icon-user',
            itemId: 'contactMenuItem'
        });
        menu.getRootNode().appendChild({
            text: 'Software',
            leaf: true,
            iconCls: 'icon-add',
            itemId: 'otherItem'
        });

        menuPanel.add(menu);
    },
    onTreepanelSelect: function(selModel, record, index, options) {
        var mainpanel = Ext.ComponentQuery.query('mainpanel')[0];
        var newTab = mainpanel.items.findBy(function(tab) {
            return tab.title === record.raw.text;
        });
        switch(record.raw.itemId) {
            case 'contactMenuItem':
                if (!newTab) {
                    newTab = mainpanel.add({
                        xtype: 'contactgrid',
                        closable: true
                    });
                }
                mainpanel.setActiveTab(newTab);
                break;
            default:
                if (!newTab) {
                    newTab = mainpanel.add({
                        title: 'Software',
                        html: 'put some content here...',
                        closable: true
                    });
                }
                mainpanel.setActiveTab(newTab);
                break;
        }
    },
    onTreepanelItemClick: function(view, record, item, index, event, options) {
        this.onTreepanelSelect(view, record, index, options);
    }
});
