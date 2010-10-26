Ext.namespace("Application.models");

Application.models.user = Ext.data.Record.create([
  {name : 'first_name'},
  {name : 'last_name'},
  {name : 'email'}
]);