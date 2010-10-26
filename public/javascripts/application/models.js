Ext.namespace("Application.models");

Application.models.user = Ext.data.Record.create([
  {name : 'first_name',type:'string',allowBlank:false},
  {name : 'last_name',type:'string',allowBlank:false},
  {name : 'email',type:'string',allowBlank:false}
]);