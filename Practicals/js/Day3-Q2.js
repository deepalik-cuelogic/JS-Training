/*2. Update program - 2 of Practicals Day 2 to add a method that will print name (called printName()) of each student object in its prototype.*/

// function constructor
function Student(firstname , lastname){
    this.firstName = firstname;
    this.lastName = lastname;
}

var student1 = new Student("Deepali" , "Kakade");
var student2 = new Student("Manisa" , "Maji");
var student3 = new Student("Geetanjali" , "Khabale");

//adding method with prototype

Student.prototype.printName = function(){
    return this.firstName + ' ' + this.lastName ;
}
console.log(student1.printName());
console.log(student2.printName());
console.log(student3.printName());