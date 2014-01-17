/**
 * @author Giovanni Victorette
 */
Ext.define('ExtMVC.view.menu.Item', {
       extend: 'Ext.tree.Panel',
       alias: 'widget.mainmenuitem',
       border: 0,
       autoScroll: true,
       rootVisible: false,
       viewConfig: {
            plugins: {
                ptype: 'treeviewdragdrop'
            }
        }
});