/*6. Write a program to do the following:
    1. Create an array and add numbers 1 to 100 in it
    2. Print each element of that array in a new line WITHOUT using any loop structure.*/


//creating array to hold 1-100 numbers

var numericArray =[];

for(var i=1 ; i<=100 ; i++){
    numericArray.push(i);
}
numericArray.forEach(function each(item) {
  document.getElementsByClassName('numeric-array')[0].innerHTML += '<p>'+item+'</p>';
});
    


