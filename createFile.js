const fs = require("fs");

let filePath = "HelloWorld.txt";

fs.writeFile(filePath, "Hello World!", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Successfully created ${filePath}`);
  }
});
