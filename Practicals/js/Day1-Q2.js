//2. Write a program that uses at least three ways to create an object variable,array variable

//Literal notation

var objectVar = {
     firstName : "Deepali",
     lastName : "Kakade",
     language : ["English" , "Hindi" , "Marathi"],
     fullName : function(){
         return this.firstName + ' ' + this.lastName;
     }
}
var hobbiesArray = ["Traveling" , "Treking" , "Reading"];
//Object constructor

var objectVar2 = new Object();
objectVar2.firstName = "Snehal";
objectVar2.lastName = "Kakade";
objectVar2.hobbies = hobbiesArray ;
//function constructor

var objectVar3 = function(objectParam){
    return "Welcome " + objectParam.fullName();
}

var userName = objectVar3(objectVar);
console.log(userName);
var LoggedInName = objectVar.fullName.apply(objectVar2);
console.log(LoggedInName);
document.getElementsByClassName('object-values')[0].innerHTML = '<p>'+userName+'</p><p> You are logged in as '+LoggedInName+'</p>';

//creating Array with new operator

var languageArray = new Array();
languageArray.push(objectVar.language);

//display on html page
document.getElementsByClassName('array-values')[0].innerHTML += '<p>Languages you mentioned are : '+ languageArray +'</p><p>Your Hobbies : '+objectVar2.hobbies+'</p>';

console.log(objectVar2.hobbies);


    
