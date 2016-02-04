define("header", function (require) {
  initMenu = function(){
  	$(".menu-header").on("click", function(){
      console.log("header trigger")
      var p = $(this).parent();
      var isThisSelected = p.hasClass("selected") ? true : false;
      var selected = $(".category .selected")
      
      if ( selected.length > 0 ) {
        selected.find(".subcategory").animate({
          opacity: .5,
          height: "0px"
        }, 500, function() {
          selected.removeClass("selected");
        });
      } else {
        p.find(".subcategory").animate({
          opacity: 1,
          height: "auto!important"
        }, 500, function() {
          p.addClass("selected");
        });
      }


    
      

    });
  } 

  checkLoadedMenu = function(){
    onModuleLoad(function() {
      console.log("teste")
      a$.login.getMenu();   
    });    
  }

  return {
    initMenu : initMenu,
    checkLoadedMenu : checkLoadedMenu()
  } 
});
 