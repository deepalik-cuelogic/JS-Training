/*1. Write a program to create functions that will do the following 
    1. Add 2 numbers
    2. Subtract 2 numbers
    3. Divide 2 numbers
    4. Multiply 2 numbers
    Then update the program to get dynamic no of arguments(there can be 2,3,4 etc no of variables passed in when invoking the functions) The function should accept at least 2 variables and throw error if less then 2 are passed. The function should also validate the type of argument passed in*/


//function calling onclick

var currentOpt;
var submitData =function(){
    
    //getting values from user
    
    var firstNo = parseInt(document.getElementById("firstNo").value);
    var secondNo = parseInt(document.getElementById("secondNo").value);
    var mathOpertSelect = document.getElementById("mathOperationOpt");
    currentOpt = mathOpertSelect.options[mathOpertSelect.selectedIndex].value ;
    //console.log(mathOperation(firstNo , secondNo , currentOpt));
    
   mathOperation(firstNo , secondNo , 5);
}

//function with fixed no of arguments


//var mathOperation =function(val1 , val2 , operation){
//    var finalResult;
//    switch(operation){
//        case 'add' :
//            finalResult = val1 + val2 ;
//            break;
//        case 'sub' :
//            finalResult = val1 - val2 ;
//            break;
//        case 'div' :
//            finalResult = val1 / val2 ;
//            break;
//        case 'mul' :
//            finalResult = val1 * val2 ;
//            break;
//        default :  document.write("Invalid Operation<br />");
//            break;
//    }
//    document.getElementsByClassName("result")[0].innerHTML = ('<strong>Final Result of '+val1+' '+operation+ ' '+val2 + ': ' +finalResult+'</strong>');
//    return finalResult;
//
//}

//function with dynamic no of arguments

var mathOperation =function(){
  //to check if all passed arguments are number
  for (var i = 0; i < arguments.length; i++) {
         if(typeof(arguments[i]) !== "number" && isNaN(arguments[i])){
             alert("Please provide number input only");
             return false;
         }
  }
  if(arguments.length >= 2){
    var finalResult =null;
    switch(currentOpt){
        case 'add' :
            for (var i = 0; i < arguments.length; i++) {
                                finalResult += arguments[i];
                              }
            break;
        case 'sub' :
            for (var i = 0; i < arguments.length; i++) {
                        if(i === 0){
                                finalResult = arguments[0];
                            }
                        else{
                                 finalResult -= arguments[i];
                             }
                }
            break;
        case 'div' :
            for (var i = 0; i < arguments.length; i++) {
                        if(i === 0){
                                finalResult = arguments[0];
                            }
                        else{
                                 finalResult /= arguments[i];
                             }
                }
            break;
        case 'mul' :
            finalResult = 1;
            for (var i = 0; i < arguments.length; i++) {
                                finalResult *= arguments[i];
                              }
            break;
        default :  finalResult = "Invalid Operation";
            break;
    }
    arguments = Array.prototype.slice.call(arguments)
    document.getElementsByClassName("result")[0].innerHTML = ('<strong>Final Result for '+ currentOpt + ' of ' + arguments +' : ' + finalResult +'</strong>');
    return finalResult;
  }
  else{
      alert("Minimum 2 arguments required");
    }
}