const fs = require("fs");

const input = process.argv; // array

/*
 * Fixed argv's
 * input[0]: path of node
 * input[1]: path of the current file
 */

/* user's will */
// current cli structure, node index.js operation fileName content(optional)

let operation = input[2];
let fileName = input[3];

if (operation == "add") {
  let content = input[4];
  fs.writeFileSync(fileName, content);
} else if (operation == "remove") {
  fs.unlinkSync(fileName);
} else {
  console.log("invalid input\n");
}
