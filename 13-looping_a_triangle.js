num = Number(prompt("Enter a number: "));

for (let i = 1; i <= num; i++) {
    line ="";
    for (j = 0; j < i; j++) {
        line += "#";
    }

    console.log(line)
}


// Method 2
a = Number(prompt("Enter a number: "));

for (let i = 1; i <= num; i++) {
    for (j = 0; j < i; j++) {
        console.log("#");
    }
    console.log("\n");
}