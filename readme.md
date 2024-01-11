## JS Engine

1. v8
2. Spider Monkey

Script

ECMAScript -> European Computer Manufacturing Association

ES6 -> Drastic Change

## Variable

1. var
2. let
3. const

``-> multiple line strings
${}-> template literal for embedding expression

## Function

1. Normal Function
2. Storing function in a variable

## Context

1. Global Context
2. Execution Context

## Execution context 3 main features

    1. Variable Object
    2. Scope Chain
    3. this keyword

2 Rules:

1. Function declarations are scanned and made available
2. Variable decalarations are scanned and made undefined

## Hoisting

1. Array
2. objects
3. loop

## Array

1. initialisation and declaration
2. size of array
3. indexOf
4. unShift
5. Shift
6. pop
7. From anything to Array --> Array.from("xyz");
8. every(func);
9. arr.fill(element,start_pos,end_pos-1);
10. arr.filter(()=>{ logic of the filter function})
11. slice(start_pos,end_pos-1)
12. splice(start_pos, end_pos, element)

## Callback Function

## Arrow Function

## Object

 1. Syntax:
    var name={
        key: value,
        key2: value2
    };
 2. Updation -> name.key2=new_value;

## console.table(name)

    Displays the object in form of a table

## Using function inside a object

    var name={
        key: value,
        function_name: function(param){
            ..
            logic..
            ..
        }
    }

## For Of loop for Arrays

## For In loop for Objects

## this

1. For all regular function calls, this refers to the Window object

Refer to this.js inside intermediate folder

## DOM --> Document Object Model

1. Selecting elements on web page
a. Query Selector
b. Get element by

## setInterval(func,time)

eg: how much needed to play football, where football is function and time is the time

## setTimeout(func,time)

eg: how much time after which football will be played,football is function and timeoutTime is time

## Prototype

    Injecting function using prototype in an object

## Object Chaining, constructor

## Functions

    Functions are treated as FirstClass Citizen in fucntional Proramming

## Functional Programming

    1. Keep data and functions totally different
    2. Not to change the state much often
    3. Make the function const as variables

## Self Executing Anonymous Function Or IIFE(Immediate Invoked Function Expression)

    (function () {
    console.log("I am ne0gi02");
    console.log("I am again there");
})();

## Closure

    It is a function bind to its lexical environment

    Uses:

    1. Module Design Pattern
    2. Currying ----> 
    function doAddition(x) {

    //return reference of the function
    return function (y) {
        return x + y;
    }
}
console.log(doAddition(6)(7));
    3. Functions like once
    4. memoize
    5. maintaining state in async world
    6. settimeOuts
    7. Iterators

## Bind and Call

//bind returns the refernce and thus not executed directly
var rimoInfo = ne0gi02.getInfo.bind(rimo);

//call directly calls the method
ne0gi02.getInfo.call(rimo);

## Text Node in html
