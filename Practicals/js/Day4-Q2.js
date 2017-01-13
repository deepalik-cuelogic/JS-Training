/* 2. Write a program to merge two objects. It should accept two arguments - objectA and objectB. The result object will have the combined values and should not change the structure of either objectA or objectB. If both objects have same properties, consider using objectA property instead. */

//source object

var objectA = {
    firstName : "Deepali",
    lastName : "Kakade",
    age : 24,
    getFullName : function(){
        return this.firstName + ' '  + this.lastName;
    }
}

//target object 

var objectB = {
    firstName :"Snehal",
    age :18,
    hobbies :['Traveling' ,'Reading']
};

function cloneObjects(sourceObj , targetObj){
 for (var prop in sourceObj) {
    if (sourceObj.hasOwnProperty(prop)) {
        targetObj[prop] = sourceObj[prop];
        }
    }
   //document.getElementsByClassName('objCopy')[0].innerHTML = '<p>Source Object (Full Name) : '+ source.getFullName()+'</p><p>Target Object (Full Name ) :'+target.getFullName()+'</p>';
    return targetObj;
}
console.log(cloneObjects(objectA , objectB));