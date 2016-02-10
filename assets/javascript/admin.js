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
    listAllUsers( $(".table-classic") );
  }

  newUser = function(){
    $(".new-user").on("click",function(){
      callNewUser();
    })
  }

  callNewUser = function () {
    a$.modal.openModal("modal","loading");
    $(".container").load("view/form/perfil_admin_form.html", function(){
      a$.state.callSelectState("#state");
      a$.user.callSelectDr("#dr_id")
      a$.functions.checkPasswords( $("#password"), $("#passwordC") );
      a$.modal.closeModal();
      setTimeout(function(){
        adminVisibility();
      },250)
      
   
    })
  }

  adminVisibility = function() {
    saveUser();
    $(".container").attr('pg', 'admin_new_user')       
  }

  saveUser = function(){
    $(".bt-white-blue#addNewUser").on("click", function(){
      if ( a$.functions.validateForm( $(this).parents("form") ) ) {
        if (a$.functions.validateFormPasswords ($("#password"), $("#passwordC") ) ) {
          a$.user.insertIfIsNew( $("#email").val() )
        }
      } 
    })
  }

  listAllUsers = function (where){
    a$.functions.sendAjax('user', {listAll: "listAll" }, function(data){
      console.log(data.length)
      for (i=0; i < data.length; i++)     
        where.append(
          "<tr>" +
            "<td></td>"
            "<td>" + data[i]['name'] +"</td>"
            "<td>" + data[i]['name'] +"</td>"
            "<td>" + data[i]['name'] +"</td>"
            "<td></td>"
          + "</tr>"
        )
       
    })
  }

 

  return {
    callAdminUser : callAdminUser
  } 
});
 