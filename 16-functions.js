const power = function(base, exponent) {
    let result = 1;

    for (i = 0; i < exponent; i++) {
        result *= base
    }

    return result;
};

console.log(power(2, 10));

// var declared variables are visible so far not declared in a function
let x = 10;
if (true) {
    let y = 20;
    let z = 30;
    console.log(x + y + z); // 60
}

console.log(x + z);

const halve = function(n) {
    return n / 2;
};

let n = 10;
console.log(halve(100)); // 50

console.log(n) // 10