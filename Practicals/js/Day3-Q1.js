//1. Write a program to calculate factorial using recursive strategy.

var calculateFacto=function(factoNumber){
    if(factoNumber == 0){
        return 1;
    }
    else{
        return factoNumber * calculateFacto(factoNumber - 1);
    }
}
document.getElementById('calculateFacto').addEventListener("click", function(event) {
    var inputNumber = parseInt(document.getElementById('factNo').value);
    var finalResult = calculateFacto(inputNumber);
    document.getElementsByClassName('finalResult')[0].innerHTML = '<p>Factorial of '+inputNumber+' is : '+finalResult+'</p>';
});