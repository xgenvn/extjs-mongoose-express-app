Ext.namespace("Application.stores");

Application.stores.users = new Ext.data.JsonStore({
  url : "/users",
  restful : true,
  idProperty : '_id',
  root : 'results',
  totalProperty : 'total',
  fields : [
    {name : 'first_name',type:'string',allowBlank:false},
    {name : 'last_name',type:'string',allowBlank:false},
    {name : 'email',type:'string',allowBlank:false}
  ]
});