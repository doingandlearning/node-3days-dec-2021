"use strict";
const assert = require("assert");
const str = "buffers are neat";
const base64 = null; // TODO: convert str to base64

assert.equal(
  base64,
  Buffer.from([
    89, 110, 86, 109, 90, 109, 86, 121, 99, 121, 66, 104, 99, 109, 85, 103, 98,
    109, 86, 104, 100, 65, 61, 61,
  ]).toString()
);

console.log("passed!");