var person = {
    firstName:'Default',
    lastName :'Default',
    greet : function(){
        return "Hi" + ' '+ this.firstName;
    }
}

//protoype inheritance

var newObj = Object.create(person);
newObj.firstName = 'Deepali';
console.log(newObj.greet());