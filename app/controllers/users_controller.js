var actions = {};

actions.index = function(request,response){
  User.find().all(function(users){
    response.send({
      results :  users
    })
  });
};

module.exports = actions;