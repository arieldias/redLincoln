define("header", function (require) {
  initMenu = function(){
    console.log("initMenu")
  	closeOpenMenu();
  } 

  closeOpenMenu = function() {
    $(".arrow-down").on("click", function(){
      $(".menu").animate({
        height: "0px"
      }, 500 );
  }

  return {
    initMenu : initMenu
  } 
});
 