// bindings are also known as variables

let caught = 5 * 5;

let ten = 10;

console.log(ten * ten); // 100

// a binding is not tied to it's value forever
let mood = "light";
console.log(mood); // "light"

mood = "dark";
console.log(mood); // "dark"

// bindings don't contain values but grasp them

let luigisDebt = 140;
luigisDebt -= 35;
console.log(luigisDebt);

// var and const can be used to create bindings similar to let

var name = "Ayda";
const greeting = "Hello ";
console.log(greeting + name);