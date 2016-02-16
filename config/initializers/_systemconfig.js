/***********************************************************************
*
* DESCRIPTION :
*       this file merges the all configuration variable to a single varibale hbzSystem
*  
* Copyright :
*   Aranoah Technologies Pvt Ltd 2014.  All rights reserved.
* 
*
* AUTHOR :    
*   vineet Kumar   
*
* START DATE :    
*   14 feb 2016
*/

var mongoconfig=require('./_mongoconfig');

var hbzSystem={
	mongoconfig:mongoconfig,
	SERVICE_URL:'./../../services/'
}

module.exports=hbzSystem;