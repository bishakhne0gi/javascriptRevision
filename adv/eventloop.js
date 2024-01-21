const a = () => {
    console.log(`I am A`);
}
const b = () => {
    setTimeout(() => {
        console.log(`Run after 3s`);
    }, 3000)
    console.log(`I am B`);
}
const c = () => {
    console.log(`I am C`);
}
//synchronous call/ concurrency model
a();
c();
b();