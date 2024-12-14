//What will be the output of the following code?
var a = 10;
if (true) {
    var a = 20;
}
console.log(a);

//What will be the output of the following code?
let b = 10;
if (true) {
    let a = 20;
}
console.log(b);


//In the following code, which scope does the variable x belong to?
function foo() {
    var x = 100;
    if (true) {
        let y = 200;
    }
}

//What will be the output of the following code?
const c = 5;
{
    const a = 10;
    console.log(a);
}
console.log(c);

//What will be the output of the following code?
var x = 1;
function test() {
    var x = 2;
    if (true) {
        var x = 3;
    }
    console.log(x);
}
test();

//What will be the output of the following code?
var x = 10;
{
    var x = 20;
}
console.log(x);

//What is the output of the following code?
let d = 5;
{
    let d = 10;
    console.log(d);
}
console.log(d);

//What is the result of the following code?
var x = 10;
function test() {
    var x = 20;
    console.log(x);
}
test();
console.log(x);


//What will the following code output?
let z = 5;
function outer() {
    let z = 10;
    function inner() {
        let z = 15;
        console.log(z);
    }
    inner();
}
outer();


//16. What will be the output of the following code?
var a = 5;
function myFunction() {
    if (true) {
        var a = 10;
    }
    console.log(a);
}
myFunction();
console.clear()
//17. What will be the output of this code?
let k = 5;
function outer() {
    const k = 10;
    function inner() {
        console.log(k);
    }
    inner();
}
outer();
