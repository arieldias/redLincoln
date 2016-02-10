define("user", function (require) {
  listAllDr = function(doWhat, where){
    a$.functions.sendAjax('user', {getDrList: "getDrList"}, function(data){
      doWhat(data, where)
    })
  }

  callSelectDr = function(where) {
     listAllDr(createSelectDr, where) 
  } 

  createSelectDr = function(data, where){
   var html = "" ;
    for (i = 0; i < data.length; i++ ){
      console.log("inside for")
      console.log(data[i])
      console.log(data[i]['name'])
      html += "<option value="+data[i]['id']+"> "+data[i]['name'] + "</option>";
    }


    $(where).append(html);
  }

  addNewUser = function(form){
    var info  = a$.functions.getFields(".form-classic input, .form-classic select")
    console.log(info);
    a$.functions.sendAjax('user', info, function(data){
       if ( data ) {
        a$.functions.displaySuccess("Usuário foi inserido com sucesso")
      } else {
        a$.functions.displayError("Ooopppsss... um erro ocorreu. Confirme os dados e tente novamente.")
      }
    })          
  }

  insertIfIsNew = function(email){
    console.log("insertif its new" + email)
    a$.functions.sendAjax('user', {emailExists: email }, function(data){
      console.log(" the email emailExists result is: " + data)
       if (!data ) {
        a$.functions.displaySuccess("Usuário foi inserido com sucesso")
      } else {
        a$.functions.displayError("Usuário já cadastrado.")
      }
       
    })
  }







  return {
   callSelectDr : callSelectDr,
   addNewUser : addNewUser,
   insertIfIsNew : insertIfIsNew
  } 
});
 