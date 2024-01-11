var User = {
    name: "",
    getUserName: function () {
        console.log(`User name is ${this.name}`);
    }
};

var ne0gi02 = Object.create(User);

ne0gi02.name = "ne0gi";
console.log(ne0gi02);

ne0gi02.getUserName();

var rimo = Object.create(User,
    {
        name: { value: "rimo" },
        courseCount: { value: 3 },
    })

rimo.getUserName();