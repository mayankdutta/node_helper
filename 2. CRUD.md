## CRUD (create, read, update, delete)

### Exploring fs

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

### Creating directory with files

```js
const fs = require("fs");

fs.mkdirSync("files");

// console.log(`${__dirname}/files.txt`);
for (let i = 0; i < 5; i++) {
  fs.writeFileSync(`${__dirname}/files/file${i}.txt`, "hello");
}

```


### Reading the directory 

```js
fs.readdir(`${__dirname}/files`, (err, files) => {
  console.log(
    err
      ? err
      : files.forEach((file) => {
          console.log(file);
        })
  );
});
```

### Files operation 

```js
const fs = require("fs");

const fileName = "readme";
const extension = "md";

// creating new file
fs.writeFileSync(`${__dirname}/${fileName}.${extension}`, "## Hello");

// reading file data
fs.readFile(`${__dirname}/${fileName}.${extension}`, "utf8", (err, data) => {
  console.log(err ? err : data);
});

// modifying data
fs.appendFileSync(
  `${__dirname}/${fileName}.${extension}`,
  ", how it's going",
  "utf8",
  (err) => {
    console.log(err ? err : "successfull !!");
  }
);

// renaming
const newFileName = "README";
fs.renameSync(
  `${__dirname}/${fileName}.${extension}`,
  `${__dirname}/${newFileName}.${extension}`,
  () => {}
);

// deleting
fs.unlinkSync(`${__dirname}/${newFileName}.${extension}`, () => {});

```
