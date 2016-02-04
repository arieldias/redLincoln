define("perfil", function (require) {
  callPerfil = function(){
    $(".container").attr('pg', 'loading')
    $(".container").load("view/form/perfil_form.html",function(){      
      fillCurrentPerfil();      
    })
  }

  fillCurrentPerfil = function(){
    a$.functions.sendAjax('login', {getPerfil: "getPerfil"}, function(data){
      console.log(data)
      a$.modal.closeModal();

      $(".form-classic input#name").val(data.name)
      $(".form-classic input#email").val(data.email)
      $(".form-classic input#city").val(data.city)
      $(".form-classic input#birth").val(data.birth)
      $(".form-classic input#state").val(data.state)
     

      $(".container").attr('pg', 'perfil_edit')
    })
  }

  return {
    callPerfil : callPerfil
  } 
});
 