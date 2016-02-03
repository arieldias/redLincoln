var a$ = window.modules = {};
 var loadCallbacks = [];
 var myPaths = {
     login: 'login',
      modal : 'modal',
      header : 'header'
 }
 function onModuleLoad(callback) {
   loadCallbacks.push(callback);
 }

 requirejs.config({
    baseUrl: 'assets/javascript/',
    paths: myPaths
});


require(['login', 'modal', 'header'], function(login, modal, header) {
   window.modules.login = login;
   window.modules.modal = modal; 
   window.modules.header = header; 
   for(var i = 0; i < loadCallbacks.length; i++) {
    loadCallbacks[i]();
   }   
});  

