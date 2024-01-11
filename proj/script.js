//array of objects
const courses = [
    {
        name: "ReactJs",
        price: "9.3"
    },
    {
        name: "MogoDb",
        price: "4.3"
    },
    {
        name: "Angular",
        price: "6.4"
    }
];


function generateList() {
    const ul = document.querySelector(".list_group");

    //very very important
    ul.innerHTML = "";

    courses.forEach((course) => {

        //creation of <li></li>
        const li = document.createElement("li");
        //adding the classname to the li
        li.classList.add("group_item");

        //creating reference of textNode
        const name = document.createTextNode(course.name);
        //appending the reference of textNode inside the li
        li.appendChild(name);

        //creation of <span></span>
        const span = document.createElement("span");
        span.classList.add("text");

        const price = document.createTextNode(` $` + course.price);
        span.appendChild(price);


        li.appendChild(span);
        ul.appendChild(li);
    })

}

// generateList();

window.addEventListener("load", generateList);


//sort courses
const button = document.querySelector(".sort_courses")
const decrease_button = document.querySelector(".sort_courses2")

button.addEventListener("click", () => {
    console.log(`Check`);
    courses.sort((a, b) => a.price - b.price)
    generateList();
})


decrease_button.addEventListener("click", () => {
    console.log(`Check`);
    courses.sort((a, b) => b.price - a.price)
    generateList();
})