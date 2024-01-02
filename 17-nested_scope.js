const humus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`)
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
}

// non constant function bindings can be reassigned
let launchMissles = function() {
    missleSystem.launch("now");
};

if (safeMode) {
    launchMissles = function() {/*Do nothing*/};
}

// Declaration Notation
function square(x) {
    return x * x;
}

console.log("The future says: ", future());

function future() {
    return "Ogueji will be the greatest car company in the world!"
}