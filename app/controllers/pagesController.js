var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var pagesController = new Controller();

pagesController.index=function(){
	this.title="index";
	this.render();
}

pagesController.login=function (){
	this.title="login";
	this.render();
}
pagesController.dashboard=function(){
	this.title="dashboard";
	this.render();
}
module.exports = pagesController;
