/***********************************************************************
*
* DESCRIPTION :
*   __system_props include the all the initializers to one file 
*  
* Copyright :
*   Ideareality Pvt Ltd 2016.  All rights reserved.
* 
*
* AUTHOR :    
*   Vineet Kumar    
*
* START DATE :    
*   14 Feb 2016
*/
// module imports
//...
var mongoose = require('mongoose');
var rndSystem=require('./_systemconfig');
var url = 'mongodb://'+hbzSystem.mongoconfig.host+':'+hbzSystem.mongoconfig.port+'/'+hbzSystem.mongoconfig.dbname;


mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	
	console.log("\n\n\n#############################################\n\n\n")
	console.log("Connected correctly to Monogo Server by mongoose connection");

  	var obj={
		  	'db':db,
		  	'mongoose':mongoose
	};	

  	//console.log(obj)
  	module.exports=obj;
  	
});