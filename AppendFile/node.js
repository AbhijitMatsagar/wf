
const fs = require('fs');

fs.appendFile("file1.txt", "I am __________", (err) => {
if (err) {
	console.log(err);
}
});
