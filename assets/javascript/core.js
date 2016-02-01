window.modules = {};
 var loadCallbacks = [];
 var myPaths = {
     login: 'login',
      modal : 'modal'
 }
 function onModuleLoad(callback) {
   loadCallbacks.push(callback);
 }

 requirejs.config({
    baseUrl: 'assets/javascript/',
    paths: myPaths
});


require(['login', 'modal'], function(login, modal) {
   window.modules.login = login;
   window.modules.modal = modal; 
   for(var i = 0; i < loadCallbacks.length; i++) {
    loadCallbacks[i]();
   }   
});


