#!/usr/bin/node
<<<<<<< HEAD
/*
    Print a square with the character #
    
    The size of the square must be the first argument 
    of the program.
*/


if (process.argv.length <= 2) {
    process.stderr.write("Missing argument\n");
    process.stderr.write("Usage: ./1-print_square.js <size>\n");
    process.stderr.write("Example: ./1-print_square.js 8\n");
    process.exit(1)
}

size = 10;

for (let i = 0 ; i < size ; i ++) {
    for (let j = 0 ; j < size ; j ++) {
        process.stdout.write("#");
    }
    process.stdout.write("\n");
=======

/*
  Print a square with the character #

  The size of the square must be the first argument of the program.
*/

// Check if the size argument is provided
if (process.argv.length <= 2) {
  console.error("Missing argument");
  console.error("Usage: ./1-print_square.js <size>");
  console.error("Example: ./1-print_square.js 8");
  process.exit(1);
}

// Parse the size argument as an integer
const size = parseInt(process.argv[2], 10);

// Check if the parsed size is a valid positive integer
if (isNaN(size) || size <= 0) {
  console.error(`Invalid size: ${process.argv[2]}`);
  process.exit(1);
}

// Print the square of size 10
const squareSize = 10;

for (let i = 0; i < squareSize; i++) {
  let row = "";
  for (let j = 0; j < squareSize; j++) {
    row += "#";
  }
  console.log(row);
>>>>>>> 986aff0758d32626ecaf48f58197dd2c3dd87e91
}
