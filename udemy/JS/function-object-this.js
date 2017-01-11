function b(){
    console.log(this);
}
b();

//proper use of this inside object and function

var person ={
    firstName : "Deepali",
    lastName :"Kakade",
    log : function(){
        var self = this;
        self.firstName = "Prajkta";
        console.log(self);
    
        var setname = function(newName){
          self.firstName = newName ;
        }
       setname("Snehal");
       console.log(self);
    }
}
person.log();