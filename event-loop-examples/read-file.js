const { readFile } = require("fs");

console.log("started first task");
//CHECK FILE PATH
readFile("/content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("complete the first task");
});
console.log("started next task");
