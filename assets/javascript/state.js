define("state", function (require) {
  listAllStates = function(doWhat, where){
    a$.functions.sendAjax('state', {getStateList: "getStateList"}, function(data){
      doWhat(data, where)
    })
  }

  callSelectState = function(where) {
     listAllStates(creatSelectState, where) 
  } 

  creatSelectState = function(data, where){
    var html = "" ;
    for (i = 0; i < data.length; i++ ){
      html += "<option value="+data[i]['id']+"> "+data[i]['name'] + "</option>";
    }

    $(where).append(html);
  }



  return {
   callSelectState : callSelectState
  } 
});
 