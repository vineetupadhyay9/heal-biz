/***********************************************************************
*
* DESCRIPTION :
*   authenticationservices includes  the authentication related  services
*  
* Copyright :
*   Aranoah Technologies Pvt Ltd 2014.  All rights reserved.
* 
*
* AUTHOR :    
*   sajan bhagat    
*
* START DATE :    
*   12 jan 2016
*/

var http = require('http');

/* creating instance of smsService */

var smsservice=require('./SMS_UTILS');
var sms_service=new smsservice();

/* including __system_props to access the system variables */

var tntSystemVariables=require('./../__system_props');
var mongoose=tntSystemVariables.tntDB.mongoose;
var Schema=mongoose.Schema;

/* loading models */

var MODELS=require('./../models/__loadModels');
var tntUser=MODELS.tntUser;

function authenticationservices(){

}

authenticationservices.prototype.initSession=function(req,user){
	req.session.uAuthentication={
		authenticated:true,
		user:user.email,
		phoneNo:user.phoneNo
	}
}

authenticationservices.prototype.destroySession=function(req,user,cb){
	console.log(req.session,user)
	if(req.session.uAuthentication&&req.session.uAuthentication.authenticated&&req.session.uAuthentication.user==user){
		req.session.uAuthentication={
			authenticated:false,
			user:user
		}
		cb(false);
	}else{
		cb(true,{error:"un-authorized attempt or session for this user doesn't exists"});
	}
}

authenticationservices.prototype.validateSession=function(req,cb){
	if(req.session.uAuthentication&&req.session.uAuthentication.authenticated){
		cb(true);
	}else{
		cb(false);
	}
}

authenticationservices.prototype.getSessionInfo=function(req){
	if(req.session.uAuthentication&&req.session.uAuthentication.authenticated){
		return req.session.uAuthentication
	}else{
		return 0;
	}
}

authenticationservices.prototype.login=function(req,cb){
	var __this=this;
	var password=req.body.password?req.body.password:req.query.password;
	var email=req.body.email?req.body.email:req.query.email;
	var obj={
		email:email,
		password:password
	}
	tntUser.find(obj,function(err,user){
		if(!err&&user.length){
			__this.initSession(req,{email:email,phoneNo:user[0].phoneNo});
			cb(true);
		}else{
			cb(false);
		}
	})
}

authenticationservices.prototype.logout=function(req,cb){
	console.log(req);
	var user=req.body.user?req.body.user:req.query.user;
	this.destroySession(req,user,cb);
}

authenticationservices.prototype.signup=function(obj,cb){

	checkUserExists(obj,function(flag){
		if(flag){
			console.log("user already exists");
			cb(true,{error:"user already exists"});
		}else{
			newUser=new tntUser(obj);
			newUser.save(function(err,result){
				if(!err){
					cb(false,result);
				}else{
					cb(true,err);
				}
			})
		}
	});
}

function checkUserExists(obj,cb){
	tntUser.find({$or:[{email:obj.email},{phoneNo:obj.phoneNo}]},function(err,result){
		if(!err&&result.length){
			cb(true);
		}else{
			cb(false);
		}
	})
}

module.exports = authenticationservices;