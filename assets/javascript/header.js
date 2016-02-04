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
        }, 200, function() {
          selected.removeClass("selected");
          selected.find(".subcategory").removeAttr("style");

          if (!isThisSelected ) {
            p.addClass("selected");
            setTimeout(function(){
              p.find(".subcategory").slideDown( "slow" )
            },500)  
          }

        });        
      } else {
        p.addClass("selected");
        setTimeout(function(){
          p.find(".subcategory").slideDown( "slow" )
        },300);         
      }
    });

    menuActions();
  } 

  checkLoadedMenu = function(){
    onModuleLoad(function() {
      console.log("teste")
      a$.login.getMenu();   
    });    
  }

  // ACTIONS OF MENU
  menuActions = function() {
    $(".link-logout").on("click", function(){
      logout();
    });

    $(".link-perfil").on("click", function(){
      callPerfil();
    });
  }

  // EACH INDIVIDUAL FUNCTION
  callPerfil = function(){
    a$.modal.openModal("modal", "loading");
    a$.perfil.callPerfil();
  }

  return {
    initMenu : initMenu,
    checkLoadedMenu : checkLoadedMenu()
  } 
});
 