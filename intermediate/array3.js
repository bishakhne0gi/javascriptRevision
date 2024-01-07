var testArray = [2, 4, 6, 3, 1, 5, 9, 8];

//fill(element,start_pos,end_pos-1)
console.log(testArray.fill("n", 2, 5));

const num = [23, 24, 45, 56, 79, 98];

const result = num.filter((e) => {
    return e < 55;
})

console.log(result);