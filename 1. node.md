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

#### Little more things 

```js
const http = require("http");

/* RESPONSE means our response to that thing,
 * means what we will reply to the request we just received,
 * means just sending data.
 */
//

http
  .createServer((request, response) => {
    // just to give the status of the data we about to give.
    response.writeHead(200, { "content-type": "application" });

    /* response must be in string,
     * either write in string,
     * or use STRINGIFY to have final thing into a string.
     */
    response.write(`{
      name: "anil", 
      year: "2000",

    }`);

    // OR

    response.write(
      JSON.stringify({
        name: "anil",
        year: "2000",
      })
    );
    response.end();
  })
  .listen(3000);

```
