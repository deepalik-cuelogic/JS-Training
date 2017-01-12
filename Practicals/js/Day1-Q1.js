/*1. Write a program to create variables of the following types:
        int
        string
        boolean
        object
        array
    then add values in array(can be value of any type). Delete values from the array using array built in methods. 
    Toggle values of boolean variables
    Concatenate string with more values(without creating new string variables)*/

//Integer variable
var intVar = 3 ;

//String variable
var stringVar = "Hello" ;

//Boolean variable
var booleanVar = true;

//Object variable
var objectVar = {
     firstName : "Deepali",
     lastName : "Kakade",
     fullName : function(){
         return this.firstName + ' ' + this.lastName;
     }
}

//Array variable
var arrayVar =[1 , 2];

//add values of diff type in array

arrayVar.push(intVar , stringVar , booleanVar , objectVar.fullName());
console.log(arrayVar);

//showing all variable values on html page
for (var i = 0 ; i< arrayVar.length ; i++){
    
    document.getElementsByClassName('array-values')[0].innerHTML += ('<p> Data '+ i +': '+arrayVar[i]+'</p>');
}

//delete value from array
var index = arrayVar.indexOf(3);

//first parameter is position of element and 2nd for how many elements to be removed
arrayVar.splice(index , 1);  

//pop ,shift , delete can be used to remove an element from an array
arrayVar.pop();
//arrayVar.shift();

//delete method keeps undefined holes in the array
delete arrayVar[2];    
console.log(arrayVar);
//showing all variable values on html page
for (var i = 0 ; i< arrayVar.length ; i++){
    
    document.getElementsByClassName('new-array-values')[0].innerHTML += ('<p> Data '+ i +': '+arrayVar[i]+'</p>');
}

//toggling boolean values
//toggling with ^= operator
booleanVar ^= true;
console.log("Toggled with ^= " +booleanVar);

//toggling with ! operator 
var booleanVar2 = true;
booleanVar2 = !booleanVar2;
console.log("Toggled with ! " +booleanVar2);

document.getElementsByClassName('boolean-toggled')[0].innerHTML += ('<p> Toggled with ^= ' + booleanVar + '</p>');
document.getElementsByClassName('boolean-toggled')[0].innerHTML += ('<p> Toggled with !' + booleanVar2 + '</p>');

//String Concatinating

var newString = stringVar + "World";

document.getElementsByClassName('boolean-toggled')[0].innerHTML += ('<p> Concatenated string :' + newString + '</p>');






