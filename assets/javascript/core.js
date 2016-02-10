var a$ = window.modules = {};
var loadCallbacks = [];
var myPaths = {
  functions : 'functions',
  login : 'login',
  modal : 'modal',
  header : 'header',
  perfil : 'perfil',
  state : 'state',
  admin : 'admin',
  user: 'user'
}

var myPathsKeys = Object.keys(myPaths)

 
function onModuleLoad(callback) {
 loadCallbacks.push(callback);
}

requirejs.config({
  baseUrl: 'assets/javascript/',
  paths: myPaths
});


require(myPathsKeys, function() { 
 for (i=0 ; i < myPathsKeys.length; i++)  {
     var prop = myPathsKeys[i]
     window.modules[prop] = arguments[i]
  }

  for(var i = 0; i < loadCallbacks.length; i++) {
    loadCallbacks[i]();
  }   
});  

