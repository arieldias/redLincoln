define("perfil", function (require) {
  callPerfil = function(){
    $(".container").attr('pg', 'loading')
    $(".container").load("view/form/perfil_form.html", function(){
      a$.state.callSelectState("#state");
      setTimeout(function(){
        fillCurrentPerfil();
      },200)      
    })
  }

  fillCurrentPerfil = function(){
    a$.functions.sendAjax('login', {getPerfil: "getPerfil"}, function(data){
      
      $(".form-classic input#name") .val( data.name )
      $(".form-classic input#email").val( data.email )
      $(".form-classic input#city") .val( data.city )
      $(".form-classic input#birth").val( a$.functions.date2Br(data.birth) )
      
      if (data.state != null && data.state != "") {
        $("option.selected").removeAttr("selected");
        $(".form-classic select#state option[value='"+data.state+"'").attr('selected', "selected")
      }
     
      a$.modal.closeModal();
      $(".container").attr('pg', 'perfil_edit')
      saveProfile()


    })
  }
  
  saveProfile = function(){
    $(".bt-white-blue").on("click", function() {
      var info  = a$.functions.getFields(".form-classic input, .form-classic select")
      a$.functions.sendAjax('login', info, function(data){
        console.log(data);
      })      
    })
    
  }

  return {
    callPerfil : callPerfil
  } 
});
 