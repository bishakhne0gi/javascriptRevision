//Everything in js is wrapped inside global context


sayHello();

function sayHello() {
    console.log("hello");
}

if (2 === "2") {
    console.log("This is true");
}


const name = "Rimo";

if (name === name) { console.log("true") };

//we cannot call here window object as in node we dont call it as window in the global context
if (name === window.name) { console.log("true") };