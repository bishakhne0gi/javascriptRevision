// previously used
var countries = ["India", "US", "Japan", "Russia"];


//now
var states = new Array("WB", "Delhi", "Rajasthan", "Delhi");

console.log(states[0]);

//length of the array
console.log(states.length);

//replace the value
states[1] = "punjab";
console.log(states);

//not a good way to do this
var user = ["ne0gi02", "bneogi102002@gmail.com", 3, 23, true];

console.log(user);

//delete last element
user.pop();

console.log(user);


//shift first element
user.unshift("NEW VALUE");

console.log(user);

//delete the shifted first element
user.shift();

console.log(user);


//return index of the element -1 if not found
console.log(user.indexOf("ne0gi02"));



//convert anything to array
console.log(Array.from("ne0gi02"));