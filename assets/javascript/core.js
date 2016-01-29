 var gb = requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'assets/javascript/',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        login: 'login',
        modal : 'modal'
    }
});


require(['login', 'modal'], function(login, modal) {
   login.callLogin();
});
