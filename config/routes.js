// Draw routes.  Locomotive's router provides expressive syntax for drawing
// routes, including support for resourceful routes, namespaces, and nesting.
// MVC routes can be mapped to controllers using convenient
// `controller#action` shorthand.  Standard middleware in the form of
// `function(req, res, next)` is also fully supported.  Consult the Locomotive
// Guide on [routing](http://locomotivejs.org/guide/routing.html) for additional
// information.
module.exports = function routes() {
  // this.root('pages#main');
  this.root({controller:'pagesController',action:'index'});
  this.match('/index',{'controller':'pagesController',action:'index'});
  this.match('/login',{controller:'pagesController',action:'login'});
  this.match('/dashboard',{controller:'pagesController',action:'dashboard'});
  // this.match('/',{controller:'pagesController',action:'main',via:'GET'});
  
  this.match('/svc/test',{controller:'hbz/rndController',action:'rnd',via:'GET'});
  this.match('/svc/testpost',{controller:'test/rndController',action:'rndpost',via:'POST'});

}
