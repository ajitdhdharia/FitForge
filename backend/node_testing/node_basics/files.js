const fs = require("fs");

// reading files
fs.readFile("./doc2.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

// Writing files
fs.writeFile("./doc1.txt", "Hello overwrite", (err) => {
  console.log();
});
fs.writeFile("./doc2.txt", "Hello new file", (err) => {
  console.log("file was created");
});

// Directories
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Directory removed");
  });
}

// Deleting files
if (fs.existsSync("./deleteme.txt")) {
  fs.unlink("./deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("File deleted");
  });
}


