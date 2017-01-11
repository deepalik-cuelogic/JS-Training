//Closures have access to its outer lexical environment variables, parameteres.

function personName(firstName){
    var extraText = "Your Name is: ";
    return function(lastName){   //inner function can access its parents variables , parameters.
        console.log(extraText + firstName +' '+ lastName);      
    } 
}
var setName = personName("Deepali");
setName("Kakade");


//closure example 

function runForLoop(){
    var arr=[];
    for (var i=0 ; i<3 ; i++){
     arr.push( function(){   //here only function object is created not invoked yet so console.log will not be executed.
            console.log(i);
        })
    }
    return arr;
}
var fs = runForLoop();

fs[0]();
fs[1]();
fs[2]();



//closure example with executed function

function runForLoop2(){
    var arr=[];
    for (var i=0 ; i<3 ; i++){
     arr.push((function(j){
           return function(){
            console.log(j);
           }
        }(i)));
    }
    return arr;
}
var fs2 = runForLoop2();

fs2[0]();
fs2[1]();
fs2[2]();