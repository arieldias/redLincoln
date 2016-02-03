define("modal", function (require) {
  openModal = function(module, func){
  	clearModal()
  	window.modules[module][func]();
  	$(".dialog-popup").fadeIn();
  } 

  clearModal = function(){
  	$(".popup-content").html("");
  }

  closeModal = function(){
  	$(".dialog-popup").fadeOut();
  }

  loading = function(){
    var html  =  "<div class='cssload-wrap'>";
        html  +=    "<div class='cssload-loading'></div>";
        html  +=    "<div class='cssload-loading cssload-v2'></div>";
        html  +=    "<div class='cssload-loading cssload-v3'></div";
        html  +=  "</div>";

        $(".popup-content").append(html);
  } 

  return {
    openModal : openModal,
    clearModal: clearModal,
    closeModal : closeModal,
    loading : loading
  } 
});
 