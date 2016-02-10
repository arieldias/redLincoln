define("functions", function (require) {

  sendAjax = function( url, inputData, handleCallBack) {
    $.ajax({
       type: "POST",
       data: inputData,
       url: "controller/" + url + ".php",
       success: function(data){
          handleCallBack(data);
       }
    });
  }

  getFields = function(from){
    var array = {};
    $(from ).each(function( index, element ) {
      array[$(element).attr("name")] =  $(element).val();
    });

    return array;
  }

  date2Br = function(data) {
    var aux = data.split("-");
    var newDate = aux[2]+"/"+aux[1]+"/"+aux[0];

    return newDate;
  }

  date2Us = function($data) {
    var aux = data.split("-");
    var newDate = aux[1]+"/"+aux[2]+"/"+aux[0];

    return newDate;
  }

  validateForm = function(from) {
    var a = true;
    $(from).find(".req").each(function(){
      if ($(this).val() == '') {
        a = false;
        $(this).addClass("form-error")
      }
    })

   return a;
  }

  validateFormPasswords = function(input1, input2) {
    $(".bad-tooltip").remove();
    var y = input1.val();
    var x = input2.val();

    if (y != x ) {
      input1.after("<div class='bad-tooltip'>Passwords não batem</div>")
      return false;
    }

    if (y.length < 5 || x.length < 5) {
      input1.after("<div class='bad-tooltip'>As senhas precisam ter ao menos 5 caracteres</div>")
      return false;
    }

    return true;
  }

  displayError = function(text) {
    var msg = $('.msg-error');
    msg.text(text);
    msg.css("display","block")
    setTimeout(function(){
      msg.fadeOut();
    },2500)
  }

  displaySuccess = function(text) {
    var msg = $('.msg-success');
    msg.text(text);
    msg.css("display","block")
    setTimeout(function(){
      msg.fadeOut();
    },2500)
  }

  checkPasswords = function(input1, input2) {
     input1.on("keyup",function(){
      var y = input1.val();
      var x = input2.val();
      console.log(x);
      console.log(y);
      $(".bad-tooltip").remove();
      if (x != '' && x.length > 4 ) {
        if(x != y ) {
          input1.after("<div class='bad-tooltip'>Passwords não batem</div>")
        }
      }
    })

    input2.on("keyup",function(){
      var x = input1.val();
      var y = input2.val();
      console.log(x);
      console.log(y);
      $(".bad-tooltip").remove();
      if (x != '' && x.length > 4 ) {
        if(x != y ) {
          input2.after("<div class='bad-tooltip'>Passwords não batem</div>")
        }
      }
    })
  }



  return {
    sendAjax : sendAjax,
    date2Us : date2Us,
    date2Br : date2Br,
    getFields : getFields,
    validateForm : validateForm,
    displaySuccess : displaySuccess,
    displayError : displayError,
    checkPasswords : checkPasswords,
    validateFormPasswords : validateFormPasswords

  } 
});
 