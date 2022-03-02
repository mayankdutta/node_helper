### creating server with express

```js
const express = require("express");

// express in executable form
const app = express();

// routing done for the 'root' location
app.get("", (request, response) => {
  response.send("Home page");
});

// routing done for the 'about' location
app.get("/about", (request, response) => {
  response.send("about page");
});

// routing done for the 'help' location
app.get("/help", (request, response) => {
  response.send("help page");
});

// we will have to make server to make things execute on.
app.listen(3000);

```
