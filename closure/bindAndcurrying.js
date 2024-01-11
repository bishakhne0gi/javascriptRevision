function doAddition(x) {

    //return reference of the function
    return function (y) {
        return x + y;
    }
}

var add = doAddition(5);
console.log(add(4));


/*doAddition()();     //currying */
console.log(doAddition(6)(7));


const ne0gi02 = {
    firstName: "ne0gi",
    lasName: "ne0gi",
    role: "intern",
    courseCount: 3,

    getInfo: function () {
        console.log(`First name is ${this.firstName}
        Last name is ${this.lasName}
        He is enrolled in ${this.role}`);
    }
}

console.table(ne0gi02);


//borrowing of the method using bind method
const rimo = {
    firstName: "rimo",
    lasName: "neogi",
    role: "sde",
    courseCount: 4,


};

//bind returns the refernce and thus not executed directly
var rimoInfo = ne0gi02.getInfo.bind(rimo);
rimoInfo();

//call directly calls the method
ne0gi02.getInfo.call(rimo);