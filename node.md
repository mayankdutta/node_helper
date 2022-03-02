#### basic server using global module http

```js
const http = require("http");

http
  .createServer((request, response) => {
    response.write("<h1> hello </h1>");
    response.end();
  })
  .listen(3000);

```
