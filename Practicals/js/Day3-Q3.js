3./* Write a program that will do the following:
    1. Accept two string values as arguments, where first value will be a long word(can be any random characters as well), second string will be a single character or substring that will already exist in the first value.
    
    2. The function should then return an object with properties - 'count' which will count the no of occurrences of substring in the first value, ' lastIndex' which will return the index of last occurrence of the substring in the first value.  return -1 if the substring can't be found */

 var subStringResult;
var substringCount =function(longString , shortString){
    //var count = (longString.match(/shortString/g) || []).length;
    var regExp = new RegExp(shortString, "g");
    var occrCount = (longString.match(regExp) || []).length;
    var lastIndexValue = longString.lastIndexOf(shortString);
    
    //onject will return properties
    subStringResult ={
        count : occrCount,
        lastIndex : lastIndexValue
    }
    if(occrCount === 0){
       return -1 ; 
    }
    else{
      return (subStringResult);  
    }
       
}
//function to call substringCount()
function calCount(){
   var longString = document.getElementById('longString').value;
   var shortString = document.getElementById('shortString').value;
   substringCount(longString , shortString);
   document.getElementsByClassName('finalResult')[0].innerHTML = '<p> Substring Occurse :' +subStringResult.count +' times and LastIndex is :'+ subStringResult.lastIndex +'</p>' ;
}
