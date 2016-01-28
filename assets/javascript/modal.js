function callModalLogin() {
	
  var html  = "<form action='' method='POST' class='form-classic '>";               
      html  +=  "<div class='row'>";
      html  +=    "<label for='login_email'>Email: </label>";
      html  +=    "<input type='text' name='email' id='login_email'/>";
      html  +=  "</div>";

      html  +=  "<div class='row'>";
      html  +=    "<label for='login_password'>Senha: </label>";
      html  +=    "<input type='password' name='password' id='login_password'/>";
      html  +=  "</div>";
      html  +=  "<div class='row'>";
      html  +=    "<input type='submit' value='Log in' onclick='return false; submitModal(\"login\")' class='bt-white-blue' name='ok'/>";
      html  +=  "</div>";
      html  +="</form>";

    console.log(html);
    $(".popup-content").prepend(html);
    
}


function submitModal(which){
  var func;
  switch(which) {
    case  'login': 
      if( checkEmptyErrors() ){

      } else {
        
      }

  }
}

function checkEmptyErrors() {
  var error = true;
  $("input.requisite").each(function(){
     error = $(this).val() == '' ? false : !error ? false : true;
  })
}