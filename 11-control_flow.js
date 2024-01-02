let theNum = Number(prompt("Pick a number"));
console.log("Your number is the square root of" + theNum * theNum);

// conditional execution
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNan(theNumber)) // if the number is not NaN
{
    console.log("Your number is the square root of" + theNumber * theNumber);
}

else {
    console.log("Hey. Why didn't you give me a number?");
}


let num = Number(prompt("Pick a number"));

if (num < 10) {
    console.log("Small");
}
else if (num < 100) {
    console.log("Medium");
}
else {
    console.log("Large");
}

// While loops
let number = 0;
while (number <= 12) {
    console.log(number);
    number += 2;
}

let result = 1;
let counter = 0;
while (counter < 10) {
    result = result * 2;
    counter = counter + 1;
}

console.log(result);

// Do loops
let yourName;
do {
    yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);


// For loops
for (let number = 0; number <= 12; number = number + 2) {
    console.log(number);
}

for (let current = 20; ; current = current + 1) {
    if (current % 7 == 0) {
        console.log(current);
        break;
    }
}