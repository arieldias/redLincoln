define("modal", function (require) {
  openModal = function(module, func){
  	clearModal()
  	window.modules[module][func]();
  	$(".dialog-popup").css('display', "block");
  } 

  clearModal = function(){
  	$(".popup-content").html("");
  }

  closeModal = function(){
  	$(".dialog-popup").fadeOut();
  }

  return {
    openModal : openModal,
    clearModal: clearModal,
    closeModal : closeModal
  } 
});
 