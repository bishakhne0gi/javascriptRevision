var name = "ne0gi02";

console.log("Line 3", name);

function sayName() {
    // var name = "Bishakh"
    console.log("Line 6", name);
    sayName2();
    function sayName2() {
        // var name = "BN"
        console.log("Line 10", name);
    }
}


//creation of scope
{

}
sayName();