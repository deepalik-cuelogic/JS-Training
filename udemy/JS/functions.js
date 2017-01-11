// normal function
function greet(){
    console.log("This is a common functon use");
}
greet();

//function with expression

var expFunction = function(){
    console.log("This is an expression function");
}
expFunction();

//function with an argument (function as argument to function)

var argFunction = function(a){
    a();   
}
argFunction(expFunction);