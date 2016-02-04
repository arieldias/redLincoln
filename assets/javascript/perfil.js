define("perfil", function (require) {
  callPerfil = function(){
    console.log("oooooohyeah perfil.js")
    $(".container").load("view/form/perfil_form.html",function(){
      $(this).attr('pg', 'perfil_edit')
      fillCurrentPerfil();
      
    })
  }

  fillCurrentPerfil = function(){
    a$.functions.sendAjax('login', {getPerfil: "getPerfil"}, function(data){
        console.log( data );
        a$.modal.closeModal();
    })
  }

  return {
    callPerfil : callPerfil
  } 
});
 