const fs = require("fs");

const readStream = fs.createReadStream("./doc3.txt", { encoding: "utf8" });
const writeStream = fs.createWriteStream("./doc4.txt");

// readStream.on("data", (chunk) => {
//   console.log("--------New Chunk--------");
//   console.log(chunk);
//   writeStream.write("\n------Chunk------\n");
//   writeStream.write(chunk);
// });

// Piping
readStream.pipe(writeStream);
