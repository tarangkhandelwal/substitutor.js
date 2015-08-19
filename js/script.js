isValidJSON=false;
$("#substitutorBtn").click(function(){
    if(!isValidJSON)
        return;
    var rawString=$("#rawString").val();
    var jsonString=$("#jsonToSubstitute").val();
 var result=substitutor(rawString, JSON.parse(jsonString));
 $("#result").html(result);

});


$("#jsonToSubstitute").blur(function(){
   var jsonElement=$("#jsonToSubstitute");
   var jsonString=jsonElement.val();
console.log(jsonElement)
  try{
    //check if valid JSON
    JSON.parse(jsonString)
    jsonElement.parent().removeClass("has-error");
    jsonElement.parent().addClass("has-success");
    isValidJSON=true;
    }
  catch(ex){
    //invalid json
    jsonElement.parent().addClass("has-error");
  }


});