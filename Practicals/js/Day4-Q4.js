/* 4. Extend number type to have a 'int()' function that will convert any given 'float' value to its integer equivalent. (a no such as 5.00 should become 5). The function should only return that value and should not affect the actual number's value.*/

Number.prototype.convertToInt = function(){
    return parseInt(this);
}
//var a = 3;

document.getElementById('converInt').addEventListener('click',function(){
    
    var floatNumber = document.getElementById('floatNo').value;
    document.getElementsByClassName('finalResult')[0].innerHTML = '<p>Float no : '+floatNumber+ ' Converted to Int no : '+ floatNumber.convertToInt() +'</p>';
    
})