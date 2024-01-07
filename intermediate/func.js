
/* NORMAL FUNCTION


function getUserRole(name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
        // break; not necessary
        case "subAdmin":
            return `${name} is subadmin with access to create and delete courses`;
        // break;
        case "testprep":
            return `${name} is testPrep with access to create and delete courses`;
        // break;
        case "user":
            return `${name} is user to consume content`;
        // break;

        default:
            return `${name} is a trial user`;
        // break;
    }
}
console.log(getUserRole("ne0gi02", "testprep"));

var getRole = getUserRole("Bishakh", "user");

console.log(getRole);
*/



/*
 STORING A FUNCTION INSIDE A VARIABLE

 var getUserRole = function (name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
        // break; not necessary
        case "subAdmin":
            return `${name} is subadmin with access to create and delete courses`;
        // break;
        case "testprep":
            return `${name} is testPrep with access to create and delete courses`;
        // break;
        case "user":
            return `${name} is user to consume content`;
        // break;

        default:
            return `${name} is a trial user`;
        // break;
    }
}
console.log(getUserRole("ne0gi02", "testprep"));

var getRole = getUserRole("Bishakh", "user");

console.log(getRole);

*/






