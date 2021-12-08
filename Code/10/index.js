// "use strict";
// const { join } = require("path");
// const { readFile, writeFile, createReadStream, createWriteStream } = require("fs");
// const contents = readFileSync(__filename, { encoding: "utf8" });

// writeFileSync(join(__dirname, "out.txt"), contents.toString().toUpperCase(), {
//   flag: "ax",
// });

"use strict";
const { createServer } = require("http");
const { Readable, Transform, pipeline } = require("stream");
const { opendir } = require("fs");

const createEntryStream = () => {
  let syntax = "[\n";
  return new Transform({
    writableObjectMode: true,
    readableObjectMode: false,
    transform(entry, enc, next) {
      next(null, `${syntax} ${entry.name}`);
      syntax = ",\n";
    },
    final(cb) {
      this.push("\n]\n");
      cb();
    },
  });
};

createServer((req, res) => {
  if (req.url !== "/") {
    res.statusCode = 404;
    res.end("Not Found");
    return;
  }
  opendir(__dirname, (err, dir) => {
    if (err) {
      res.statusCode = 500;
      res.end("Server Error");
      return;
    }
    const dirStream = Readable.from(dir);
    const entryStream = createEntryStream();
    res.setHeader("Content-Type", "application/json");
    pipeline(dirStream, entryStream, res, (err) => {
      if (err) console.error(err);
    });
  });
}).listen(3000);

// fstat.console.log(contents.toString());
