var user = {
    firstName: "ne0gi02",
    lastName: "Neogi",
    role: "Intern",
    loginCount: 32,
    fbSignedInCount: true,
    courseList: [],
    //function passing in an object
    buyCourse: function (courseName) {
        //this ---> to access the array inside the object.
        this.courseList.push(courseName);
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },
    getUserInfo: function () {
        return `First Name: ${this.firstName}
            Last Name: ${this.lastName}
            Role: ${this.role}
            Login Count: ${this.loginCount}
            Fb Signed: ${(this.fbSignedInCount === true ? "Yes" : "No")}
            CourseList: ${this.courseList}
        `;
    }

};

console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("react");
user.buyCourse("angular");
console.log(user.getCourseCount());
console.log(user.getUserInfo())
