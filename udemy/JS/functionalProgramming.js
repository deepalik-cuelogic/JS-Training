function array(arr , fn){
    var newArray =[];
    for(i=0 ; i<arr.length; i++){
       newArray.push(
           fn(arr[i])
       )
    }
    return newArray;
}

var arr1= [1,2,3];
console.log(arr1);

var arr2 = array(arr1 , function(item){
    return item * 2;
});
console.log(arr2);