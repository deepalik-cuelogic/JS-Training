function greeting(firstName ,lastName , lang){
    if(lang === 'en'){
      console.log("Hello " + firstName);  
    }
    else{
       console.log("Hola " + firstName);    
    }
     
}
function greetEnglish(firstName , lastName){
     greeting(firstName ,lastName , 'en');
}
function greetSpanish(firstName , lastName){
     greeting(firstName ,lastName , 'es');
}
greetEnglish("Deepali","Kakade" ,"en");
greetSpanish("Deepali","Kakade" ,"es");


//immediatly invoked function expression (IIFE)

var greetings = function(name){
    console.log("Hello" +' '+ name);
}("Deepali");


//OR 

(function(name){
    console.log("Good Morning" +' '+ name);
}("Deepali"));