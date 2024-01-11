function init() {
    var firstName = "ne0gi"
    function sayFirstName() {
        console.log(firstName);
    }
    //creating the reference and not running it straight-forware
    return sayFirstName;
}

var check = init();

//closure call as the ref is passed and hence the init cannot be dismounted because of sayFirstNamek
check();


//example 2
function doAddition(x) {

    //return reference of the function
    return function (y) {
        return x + y;
    }
}

var add = doAddition(5);
console.log(add(4));


//example 3
console.log(doAddition(6)(7));


