/*
5. Write a program to loop through the children of a ul element(ul will have 5 li's). Loop through each of the li and attach a function on it that will alert the value of that li (html text inside the li). 
*/
//var currentul = document.getElementsByTagName("ul");
var ulItems = document.getElementById("student-name-list").getElementsByTagName("li");
//var ulItems = document.getElementsByTagName("li");

var loopList = (function(){
    for(var i = 0 ; i< ulItems.length ; i++){
      
     //immediately invoked funcion
        
        (function(currentliValue){
            alert(currentliValue);
        }(ulItems[i].innerHTML));
        
    }
 }());