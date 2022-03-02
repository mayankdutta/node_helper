### waiting for the updated data and print it. 

```js
let a = 20;
let b = 10;

let updatedData = new Promise((resolve, reject) => {
  setTimeout(() => {
    b = 40;
    
    /* 
     * it is just to let know that work is done, 
     * we can pass anything in resolve in the form of data,
     */
     
    resolve(b);
  }, 2000);
});

console.log(a + b);
updatedData.then((data) => {
  console.log(data);
});
```
