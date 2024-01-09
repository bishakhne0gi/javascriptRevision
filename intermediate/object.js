
//object has key value pair
//key:value
var user = {
    firstName: "ne0gi02",
    lastName: "Neogi",
    role: "Intern",
    loginCount: 32,
    fbSignedInCount: true
};

//Method 1
console.log(user.firstName);
//Method 2
console.log(user["lastName"]);

user.loginCount = 44;
console.log(user.loginCount);
console.log(user);

//return in kind of a table
console.table(user);