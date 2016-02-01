define("login", function (require) {
  callLogin = function(){
    var html  = "<form method='POST' class='form-classic '>";               
        html  +=  "<div class='row'>";
        html  +=    "<label for='login_email'>Email: </label>";
        html  +=    "<input type='text' name='user' class='req' id='login_email'/>";
        html  +=    "<span class='errorMsg'></span>";
        html  +=  "</div>";
        html  +=  "<div class='row'>";
        html  +=    "<label for='login_password'>Senha: </label>";
        html  +=    "<input type='password' name='password' class='req' id='login_password'/>";
        html  +=    "<span class='errorMsg'></span>";
        html  +=  "</div>";
        html  +=  "<div class='row'>";
        html  +=    "<input type='button' name='submit_login' href='javascript:void(0)' value='Log in' class='bt-white-blue' id='submit-login'/>";
        html  +=  "</div>";
        html  +="</form>";
 
        console.log(html);
        $(".popup-content").prepend(html);
        actions();
  } 

  callLoginSuccess = function (){
      var html  = "<div class='login-sucess sucess'>Login realizado com sucesso</div>";
          html  += "<div class='time'>Aguarde... </div>";
      $(".popup-content").prepend(html);
  }

  actions = function() {
    $("#submit-login").on("click", function(){
        var info = getFields( $(".form-classic input") )
    
        $.ajax({
           type: "POST",
           data: info,
           url: "controller/login.php",
           success: function(data){
              if ($.isArray(data)) {
                
              }else{
                window.modules.modal.clearModal();
                callLoginSuccess();
                setTimeout(function(){
                  window.modules.modal.closeModal();  
                },3000)
                
                
              }
           }
        });

       
    })    
  }

  getFields = function(from){
    var array = {};
    $(from ).each(function( index, element ) {
      array[$(element).attr("name")] =  $(element).val();
    });

    return array;

  }

  return {
    callLogin : callLogin    
  } 
  
});
 