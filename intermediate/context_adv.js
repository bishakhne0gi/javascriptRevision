//inside the global context

//window object is majorly for the browser
var num = 1;
function sayMe() {
    console.log("Say me");
}

//Execution Context
sayMe();

// It works as stack

/*
Execution context 3 main features
    1. Variable Object
    2. Scope Chain
    3. this keyword


2 Rules:

1. Function declarations are scanned and made available
2. Variable decalarations are scanned and made undefined

*/
tipper("5");

function tipper(a) {
    var bill = parseInt(a);
    console.log(bill + 5);
}



/*

Code hoisting
big_tipper("200");
Error: 
here the 2nd rule comes into play as the variable is scanned and made undefined
var big_tipper = function (a) {
    var bill = parseInt(a);
    console.log(bill + 15);
}
*/


var big_tipper = function (a) {
    var bill = parseInt(a);
    console.log(bill + 15);
}

big_tipper("200");

/*
console.log(name);

it will give undefined

var name = "ne0gi02";
*/

var name1 = "ne0gi02";
console.log(name1);


console.log(name);
var name = "ne0gi02";


function sayName() {
    var name = "MR. Bishakh";
    console.log(name);
}

sayName();
console.log(name);




