const state = ["Delhi", "WB", 1947, "Rajasthan"]


//normal for loop
for (let index = 0; index < state.length; index++) {

    if (typeof state[index] !== "string") continue;
    console.log(state[index]);

}


console.log();
console.log();

//for each loop
state.forEach((e) => {
    return console.log(e);
})
console.log();
console.log();

//for of loop
for (const n of state) {
    console.log(n);
}

const symbols = {
    lc: "leetcode",
    gfg: "geeksforgeeks",
    cc: "codechef"
}

console.log();
console.log();

//for in loop
for (const n in symbols) {
    console.log(`Key is ${n} and vlaue is: ${symbols[n]}`);
}


