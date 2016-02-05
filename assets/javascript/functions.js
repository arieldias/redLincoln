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

  return {
    sendAjax : sendAjax,
    date2Us : date2Us,
    date2Br : date2Br,
    getFields : getFields
  } 
});
 