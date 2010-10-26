var Application = {};

Ext.namespace("Application.models");

Application.models.user = Ext.data.Record.create([
  {name : 'first_name'},
  {name : 'last_name'},
  {name : 'email'}
]);
Ext.namespace("Application.stores");

Application.stores.users = new Ext.data.JsonStore({
  url : "/users",
  root : 'results',
  restful : true
});
Ext.namespace("Application.util");

Application.grid = new Ext.grid.GridPanel({
  style : 'margin: 20px auto;',
  title : 'Users',
  id : 'users_grid',
  width : 700,
  height: 300,
  frame : true,
  loadMask : true,
  stripeRows : true,
  viewConfig : {
    forceFit : true,
    emptyText : 'No Rows To Display',
    deferEmptyText : false
  },
  store : Application.stores.users,
  colModel : new Ext.grid.ColumnModel({
    columns : [{
      header : "First Name",
      dataIndex : "first_name"
    },{
      header : "Last Name",
      dataIndex : "last_name"
    },{
      header : "Email",
      dataIndex : "email"
    }]
  }),
  tbar : [{
    iconCls : 'silk-delete',
    text : 'Remove User',
    handler : function(){

    }
  },{
    xtype : 'tbfill'
  },{
    iconCls : 'silk-add',
    text : 'Add User',
    handler : function(){

    }
  }],
  bbar : new Ext.PagingToolbar({
    store : Application.stores.users
  }),
  listeners : {
    render : {
      fn : function(){
        Application.grid.getStore().load();
      },
      delay : 25
    }
  }
});

Ext.onReady(function(){
  Application.grid.render("container");
});
