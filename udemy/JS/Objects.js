var person = new Object();

person["firstName"] = "Deepali";
person["lastName"] = "Kakade";

var printFirstName = "firstName";

console.log(person);
console.log(person[printFirstName]);

person["address"] = new Object();

person.address.street = "Pashan-sus road";
person.address.house = "C-12";

console.log(person["address"]["street"]);
console.log(person.address.house);

//Second Way of creating object

var person2 = {
    firstName : "Deepali",
    lastName:  "Kakade",
    address:{
        street1: "Pashan-sus road",
        houseNo : "C-12"
    }
}
console.log(person2);

//Passing object to function as an argument

function greet(person){
    console.log('Hi ' + person.firstName);
}

//calling function 
greet(person2);

greet({firstName : "Manisha" , lastName : "Maji"});