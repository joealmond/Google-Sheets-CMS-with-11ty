const fs = require("fs");

const hashValue = Math.round(Math.random() * 10000);
const content = String(hashValue);

try {
  fs.writeFileSync("./dist/buildHash.txt", content);
} catch (err) {
  console.error(err);
}
