define("header", function (require) {
  initMenu = function(){
  	closeOpenMenu();    
  } 

  closeOpenMenu = function() {
    $(".arrow-down").on("click", function(){
      console.log('teste')
    });
  }

  checkLoadedMenu = function(){
    onModuleLoad(function() {
      a$.login.getMenu();   
    });    
  }

  return {
    initMenu : initMenu,
    checkLoadedMenu : checkLoadedMenu()
  } 
});
 