const fs = require("fs");

const hello = "Hello, world";
const textIn = fs.readFileSync("input.txt", "ascii");
const textOut = `This is: ${textIn}`;
fs.writeFileSync("output.txt", textOut);
fs.appendFileSync("input.txt", textOut);

console.log(textIn);
