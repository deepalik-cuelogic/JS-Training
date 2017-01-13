/*
    3. Extend number type to have a 'float()' function that will convert any given 'integer' value to its float equivalent. (a no such as 5 should become 5.00) The function should only return that value and should not affect the actual number's value.
*/

Number.prototype.convertToFloat = function(){
    return this.toFixed(2);
}
//var a = 3;

document.getElementById('converFloat').addEventListener('click',function(){
    var intNumber = parseInt(document.getElementById('integerNo').value);
    document.getElementsByClassName('finalResult')[0].innerHTML = '<p>Integer no : '+intNumber+ ' Converted to float no : '+ intNumber.convertToFloat() +'</p>';
})