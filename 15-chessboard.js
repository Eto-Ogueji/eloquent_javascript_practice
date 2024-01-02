let size = Number(prompt("Enter a height: "));
let chessboard = "";

for (let i = 0; i < size; i++) {
    
    for (let j = 0; j < size; j++) {
        if ((i + j) % 2 == 0) {
            chessboard += " "
        }
        else {
            chessboard += "#";
        }
    }
    chessboard += "\n"
    console.log("\n");
}