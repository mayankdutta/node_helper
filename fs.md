### exploring fs

```js
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
```

### creating directory with files

```js
const fs = require("fs");

fs.mkdirSync("files");

// console.log(`${__dirname}/files.txt`);
for (let i = 0; i < 5; i++) {
  fs.writeFileSync(`${__dirname}/files/file${i}.txt`, "hello");
}

```
