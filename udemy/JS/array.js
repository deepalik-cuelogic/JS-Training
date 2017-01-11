var dataArray =[
    1 ,
    
    true,
    
   {
      firstName : "Deepali" ,
      lastName : "Kakade"
    } ,
    
    function(name){
      var greetings = "Hello";
      console.log(greetings + ' ' +name);
    },
    
    "Good Morning"   
]

console.log(dataArray);
dataArray[3]( dataArray[2].firstName);