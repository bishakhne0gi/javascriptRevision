const red = document.querySelector(".red");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");
const yellow = document.querySelector(".yellow");

const colorArray = [red, green, blue, yellow];

const center = document.querySelector(".center");



const getbgColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor
}


// var color = getbgColor(blue);



const colorChanger = (element, color) => {
    return element.addEventListener('mouseenter', () => {
        center.style.background = color;
    })
}

for (const element of colorArray) {
    colorChanger(element, getbgColor(element));
}

// colorChanger(red, getbgColor(red));