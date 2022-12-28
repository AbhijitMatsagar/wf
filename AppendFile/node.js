// Node.js program to demonstrate the
// fs.appendFile() method

// Import the filesystem module
const fs = require('fs');

// Get the file contents before the append operation
console.log("\nFile Contents of first file before append:",
fs.readFileSync("file1.txt", "utf8"));

console.log("\nFile Contents of second file before append:",
fs.readFileSync("file2.txt", "utf8"));

fs.appendFile("file2.txt", "file1.txt", (err) => {
if (err) {
	console.log(err);
}
else {
	// Get the file contents after the append operation
	console.log("\nFile Contents of file after append:",
	fs.readFileSync("file2.txt", "utf8"));
}
});
