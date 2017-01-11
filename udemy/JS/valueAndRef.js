//By value - variable create two diff memory locations for a and b
var a = 3;
var b;
b = a ;

a = 2 ;
console.log(a);
console.log(b);

//By reference - objects point to the same memory location rather than creating new

var c = {greetings:"Good Morning"};
var d;
d = c ;
d.greetings ="Guten Morgen";
console.log(c.greetings);
console.log(d.greetings);

//equal operator will create new space for object

c = {greetings : "Good Night"};
console.log(c.greetings);
console.log(d.greetings);