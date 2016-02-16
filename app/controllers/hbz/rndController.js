var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var rndController = new Controller();

rndController.rnd = function() {
 	var __self=this;
 	var username,password;
 	username=__self.req.query.username;
 	password=__self.req.query.password;
 	__self.res.write(
 		JSON.stringify({
 			status:0,
 			result:[
 			{
 				username:username,
 				password:password
 			}],
 			message:"data received"
 		}));
 	__self.res.end();
}

rndController.rndpost=function () {
	var  __self=this;
	var username=__self.req.query.username?__self.req.query.username:__self.req.body.username;
	var password=__self.req.query.password?__self.req.query.password:__self.req.body.password;
	console.log(username,password);

	__self.res.write("done");
	__self.res.end();
}
module.exports = rndController;