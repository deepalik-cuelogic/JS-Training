function person(){
    this.firstName = "Deepali";
    this.lastName = "Kakade";
}

//creating object with the use of function

var functionObj = new person();         //It creates functionObj object with the data of person() function  
console.log(functionObj);


//functions still perform same although we are constructing object from them

function person2(firstname , lastname){
    this.firstName = firstname;
    this.lastName = lastname;
    console.log("This is the second function with parameters");
}

var functionObj2 = new person2("Snehal","Kakade");
//uses of prototype property on object

person2.prototype.getFullName = function(){
    return this.firstName + ' ' + this.lastName ;
}
console.log(functionObj2);
console.log(functionObj2.getFullName());


//built-in function constructors

String.prototype.isLenthGreaterThan = function(limit){
    console.log(this + ", String length: " + this.length);
    return this.length > limit;
}

console.log("Deepali".isLenthGreaterThan(5));


//as built in functions directly converts string to an object it doesn't conver numbers directly we have to use Number() built in function for this

Number.prototype.isPositive = function(){
    return this >=0 ;
}
var a = new Number(3);
console.log(a.isPositive());