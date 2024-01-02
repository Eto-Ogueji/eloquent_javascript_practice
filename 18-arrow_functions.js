const power = function(base, exponent) {
    let result = 1;

    for (i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

// OR using arrow function method

const power2 = (base, exponent) => {
    let result = 1;

    for (i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

const square1 = (x) => {return x * x};
const square2 = x => x * x;

// no parameters = empty parentheses
const horn = () => {
    console.log("Toot");
}

function minus(a, b) {
    if (b === undefined) return -a;
    else return a - b;
}

console.log(minus(10));
console.log(minus(10, 5));

function randExp(base, exponent = Math.floor(Math.random() * 10)) {
    result = 1;

    for (i = 0; i < exponent; i++) {
        result *= base;
    } return result;
};

