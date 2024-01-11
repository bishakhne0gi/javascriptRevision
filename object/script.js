
//creation of prototype
var User = function (firstName, courseContent) {
    //functional approach of defining object
    this.firstName = firstName;
    this.courseContent = courseContent
    this.getCourseCount = function () {
        console.log(`Course count is ${this.courseContent}`);
    };
};

//injecting function call with the help of prototype
User.prototype.getFirstname = function () {
    console.log(`Your first name is ${this.firstName}`);
};






//new used for invoking constructor, when we put new it points to the prototype call, hence not a regular function call
var ne0gi02 = new User("ne0gi02", 2);
// console.log(ne0gi02);
ne0gi02.getCourseCount();

//object chaining
if (ne0gi02.hasOwnProperty("firstName")) {
    ne0gi02.getFirstname();
}


ne0gi02.getFirstname();

var bhaduri = new User("bhaduri", 1);
bhaduri.getCourseCount();
bhaduri.getFirstname();
// console.log(bhaduri);








