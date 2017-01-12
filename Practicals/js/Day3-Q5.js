/* 5.  Write a function that will accept a single dimensional array whose value will be like ['00','01','11','10','11','00'] and break it into a 2 dimensional array like the following:
    [
        [0,0,1,1,1,0]
        [0,1,1,0,1,0]
    ]
    the  length of array can be dynamic and contain as many values as possible.. */


//var conver2DArray = function(arr , cols ,rows){
//    var twoDMatrics = [];
//    var secondArray =[];
//    for (var r = 0; r < rows; r++) {
//       for(var i =0 ; i< arr.length ; i++){
//           
//            twoDMatrics.push(Number(arr[i].charAt(r))); 
//        } 
//    }
//    secondArray = twoDMatrics.splice(0,cols);
//    return twoDMatrics = twoDMatrics + secondArray;
//   
//}
var conver2DArray = function(arr , cols ,rows){
    var twoDMatrics = new Array();

    for (var r = 0; r < rows; r++) {
        twoDMatrics[r] = new Array();
       for(var i =0 ; i< arr.length ; i++){  
            twoDMatrics[r].push(Number(arr[i].charAt(r))); 
        } 
    }
     
    document.getElementsByClassName('1d-array')[0].innerHTML = '<p>1D Array : '+ arr+'</p>';
    document.getElementsByClassName('2d-array')[0].innerHTML = '<p>1D Array : '+ twoDMatrics +'</p>';
    console.log(twoDMatrics);
    return twoDMatrics;
}
var inputArray = ["00","01","11","10","11","00"];
var arrayLength = inputArray.length;
conver2DArray(inputArray , arrayLength , 2);