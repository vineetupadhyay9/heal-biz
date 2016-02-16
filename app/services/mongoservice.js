/***********************************************************************
*
* DESCRIPTION :
*   mongoservices includes  the database related services
*  
* Copyright :
*   Aranoah Technologies Pvt Ltd 2014.  All rights reserved.
* 
*
* AUTHOR :    
*   vineet kumar   
*
* START DATE :    
*   14 feb 2016
*/

var http = require('http');
/* including __system_props to access the system variables */

var hbzSystemVariables=require('./../__system_props');
var mongoose=hbzSystemVariables.hbzDB.mongoose;
var Schema=mongoose.Schema;

/* loading models */

var MODELS=require('./../models/__loadModels');


function mongoservices(){

}

mongoservices.prototype.insertLead=function(obj,cb){

	var newLead=new loadFeeds(obj);
	
	newLead.save(function(err,result){
		if(!err){
			cb(false,result);
		}else{
			cb(true,err);
		}
	})
}


module.exports=mongoservices;
