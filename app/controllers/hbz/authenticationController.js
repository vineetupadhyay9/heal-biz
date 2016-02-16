var locomotive = require('locomotive')
  , Controller = locomotive.Controller;
var authenticationController = new Controller();

var tntSystem=require('./../../../config/initializers/_systemconfig');

var authenticationservices=require(tntSystem.SERVICE_URL+'authenticationservices');
var authServices=new authenticationservices();

authenticationController.login=function() {
	var __self=this;
	authServices.login(__self.req,function(authn){
		if(authn){
			__self.res.write(JSON.stringify({
				status:0,
				result:[{
					"AUTHENTICATED":true
				}],
				message:"AUTHENTICATED"
			}))
			__self.res.end();
		}else{
			__self.res.write(JSON.stringify({
				status:400,
				result:[{
					"AUTHENTICATED":false
				}],
				error:"UN-AUTHORIZED or User does not exists"
			}))
			__self.res.end();
		}
	})
}

authenticationController.logout=function(){
	var __self=this;
	authServices.logout(__self.req,function(error,result){
		if(!error){
			__self.res.write(JSON.stringify({
				status:0,
				result:[],
				message:'you are successfully logged out of your Account '
			}))
			__self.res.end();
		}else{
			__self.res.write(JSON.stringify({
				status:400,
				result:[],
				message:result.error
			}))
			__self.res.end();
		}
	})
	
}

authenticationController.signup=function(){
	var __self=this;
	var reqBody=__self.req.body;
	
	authServices.signup(reqBody,function(error,results){
		if(!error){
			__self.res.write(JSON.stringify({
				status:0,
				result:[results]
			}))
			__self.res.end();
		}else{
			__self.res.write(JSON.stringify({
				status:400,
				result:[results]
			}))
			__self.res.end();
		}
	})
}

module.exports = authenticationController;