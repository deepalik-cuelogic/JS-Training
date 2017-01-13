/* 2. Write a program that will do the following:
    1. Create a student class and then create multiple student objects out of it.
    2. Using a student object, add a method in the student class that will be then accessible from new objects created. */

// function constructor
function Student(firstname , lastname){
    this.firstName = firstname;
    this.lastName = lastname;
}

var student1 = new Student("Deepali" , "Kakade");
var student2 = new Student("Manisa" , "Maji");
var student3 = new Student("Geetanjali" , "Khabale");