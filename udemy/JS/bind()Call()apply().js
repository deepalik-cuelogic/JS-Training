var person ={
    firstName : "Deepali",
    lastName : "Kakade",
    getFullName : function(){
        var fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
}
//bind() example
var logName = function(lang1 , lang2){
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-------------------------');
}//.bind(person);
var FullLogName = logName.bind(person);
FullLogName('en');

//call() example

logName.call(person ,'en', 'es');

//apply() example

logName.apply(person ,['en', 'es']);

//by creating an function on the fly and using aplly()

(function(lang1 , lang2){
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-------------------------');
}).apply(person ,['es','en']);

//function borrowing
var person2 ={
    firstName : "Snehal",
    lastName : "Kakade"
}
console.log(person.getFullName.apply(person2));


//function currying
function multiplication(a,b){
    return a*b;
}
var multiByTwo = multiplication.bind(this ,2);
console.log(multiByTwo(4));