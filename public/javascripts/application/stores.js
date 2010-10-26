Ext.namespace("Application.stores");

Application.stores.users = new Ext.data.JsonStore({
  url : "/users",
  root : 'results',
  restful : true
});