define("admin", function (require) {
  callAdminUser = function(){
    $(".container").attr('pg', 'loading')
    $(".container").load("view/pages/admin_user.html", function(){
      console.log("all is good")       
      a$.modal.closeModal();
      $(".container").attr('pg', 'admin_users')  
    })
  }

 

  return {
    callAdminUser : callAdminUser
  } 
});
 