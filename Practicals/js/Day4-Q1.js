/* 1. Write a program to copy two objects. It should accept two arguments - source ( the object from which we need to copy) and target ( to which we need to copy). The target object will initially be empty. */

//source object

var objSource = {
    firstName : "Deepali",
    lastName : "Kakade",
    age : 24,
    getFullName : function(){
        return this.firstName + ' '  + this.lastName;
    }
}

//target object 

var objTarget = {
    age :18
};

function cloneObjects(source , target){
    for (var prop in source) {
    if (source.hasOwnProperty(prop)) {
        target[prop] = source[prop];
        }
    }
    document.getElementsByClassName('objCopy')[0].innerHTML = '<p>Source Object (Full Name) : '+ source.getFullName()+'</p><p>Target Object (Full Name ) :'+target.getFullName()+'</p>';
    return target;
}
console.log(cloneObjects(objSource , objTarget));
