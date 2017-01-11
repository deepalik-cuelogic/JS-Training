function callBackFunction(callback){
    var a = 1000;
    var b = 2000;
    
    callback();    
}
callBackFunction(function(){
    console.log("I am done!");
})
callBackFunction(function(){
    console.log("All done...");
})