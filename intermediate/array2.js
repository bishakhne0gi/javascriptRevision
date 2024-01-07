/*
function isEven(element) {


    // if (element % 2 === 0) {
    //     return true;
    // }
    // else {
    //     return false;
    // }

    return element % 2 === 0;
}

console.log(isEven(2));
*/


// Arrow Function
var isEven = (element) => {


    // if (element % 2 === 0) {
    //     return true;
    // }
    // else {
    //     return false;
    // }

    return element % 2 === 0;
};

console.log(isEven(2));

//use function for every element in the array
// const result = [2, 4, 6, 8].every(isEven);

// console.log(result);



//callback function with curly braces ---> return needed
var ans = [2, 4, 6, 8].every((e) => {
    return e % 2 === 0;
});

console.log(ans);

//callback function without curly braces ---> nothin needed
var ans = [2, 4, 6, 8].every((e) =>
    (e % 2 === 0)
);

console.log(ans);



