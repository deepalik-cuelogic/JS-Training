//JS object
var personObject ={
    firstName : "Deepali",
    lastName : "Kakade"
}
//converting JS object to JSON

console.log(JSON.stringify(personObject));

//JSON data and converting JSON to JS object
var JSONObject = JSON.parse('{"firstName" : "Deepali", "lastName" : "Kakade"}');
console.log(JSONObject);


