console.log("Line 1", this);

var user = {
    firstName: "ne0gi02",
    courseCount: 3,
    getCourseCount: function () {
        console.log("LINE 7", this);
        function sayHi() {
            console.log("hi");
            console.log("Line 10", this);
        }
        sayHi();
    }
}

//not a regular function call, it is object call
user.getCourseCount();

//regular function call
function sayHello() {

}