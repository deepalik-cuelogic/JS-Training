function person(firstName , lastName , age){
    if(arguments.length === 0){
         console.log("Arguments are missing");
        return;
     }
    console.log(firstName);
    console.log(lastName);
    console.log(age);
    console.log(arguments);
    console.log('---------------');  
}
person();
person('Deepali','Kakade', 24);