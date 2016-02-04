var a$ = window.modules = {};
 var loadCallbacks = [];
 var myPaths = {
     functions : 'functions',
     login: 'login',
     modal : 'modal',
     header : 'header',
     perfil : 'perfil'

 }
 function onModuleLoad(callback) {
   loadCallbacks.push(callback);
 }

 requirejs.config({
    baseUrl: 'assets/javascript/',
    paths: myPaths
});


require(['functions','login', 'modal', 'header', 'perfil'], function(functions, login, modal, header, perfil) {
   window.modules.functions = functions;
   window.modules.login = login;
   window.modules.modal = modal; 
   window.modules.header = header; 
   window.modules.perfil = perfil; 
   for(var i = 0; i < loadCallbacks.length; i++) {
    loadCallbacks[i]();
   }   
});  

