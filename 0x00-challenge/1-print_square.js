#!/usr/bin/node
/*
    Print a square with the character #
    
    The size of the square must be the first argument 
    of the program.
*/

// Check if the size argument is provided
if (process.argv.length <= 2) {
    console.error("Missing argument");
    console.error("Usage: ./1-print_square.js <size>");
    console.error("Example: ./1-print_square.js 8");
    process.exit(1); // Exit with an error code
}

// Parse the size argument as an integer
const size = parseInt(process.argv[2], 10);

// Check if the parsed size is a valid positive integer
if (isNaN(size) || size <= 0) {
    console.error(`Invalid size: ${process.argv[2]}`);
    process.exit(1); // Exit with an error code
}

// Print the square
for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size; j++) {
        row += "#";
    }
    console.log(row);
}
