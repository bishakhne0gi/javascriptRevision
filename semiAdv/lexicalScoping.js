function init() {
    var firstName = "ne0gi"
    function sayFirstName() {
        console.log(firstName);
    }
    sayFirstName();
}

init();
// console.log(firstName);
//Execution

/*
1. GlobalExecution context get mounted
2. init() get mounted
3. sayFirstName() get mounted

This is how call-stack of js works.

*/
