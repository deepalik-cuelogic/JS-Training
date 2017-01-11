//function to reassign variable

function reassignVar(){
    globalVariable = 2;
    console.log('value from reassignVar() : ' + globalVariable);
}

//function to call reassignVar() function

function callReassignVar(){
    var globalVariable;
    console.log('value from callReassignVar() : ' + globalVariable);
    reassignVar();
}
var globalVariable = 1;
console.log('globalVariable :' + globalVariable);
callReassignVar();