define("admin", function (require) {
  callAdminUser = function(){
    $(".container").attr('pg', 'loading')
    $(".container").load("view/pages/admin_user.html", function(){
      console.log("all is good")       
      a$.modal.closeModal();
      $(".container").attr('pg', 'admin_users')  
      adminActions();
    })
  }

  adminActions = function() {
    newUser();
  }

  newUser = function(){
    $(".new-user").on("click",function(){
      callNewUser();
    })
  }

  callNewUser = function () {
    a$.modal.openModal("modal","loading");
    $(".container").load("view/form/perfil_form.html", function(){
      $('h1').html("Admin: <span class='subh1'> Usuários: <span class='subsubh1'> Novo</span></span>")
      a$.state.callSelectState("#state");
      console.log("serio?")
      adminVisibility();
   
    })
  }

  adminVisibility = function() {
    console.log($(".admin-visibility").length)
    $(".admin-visibility").load("view/form/perfil_form_admin_snippet.html",function(){
          
        a$.modal.closeModal();
        $(".container").attr('pg', 'admin_new_user') 
      })
  }

 

  return {
    callAdminUser : callAdminUser
  } 
});
 