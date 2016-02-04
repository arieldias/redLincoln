define("functions", function (require) {

  sendAjax = function( url, inputData, handleCallBack) {
  	console.log( "controller/" + url + ".php")
    $.ajax({
       type: "POST",
       data: inputData,
       url: "controller/" + url + ".php",
       success: function(data){
          handleCallBack(data);
       }
    });
  }

  return {
    sendAjax : sendAjax,
  } 
});
 