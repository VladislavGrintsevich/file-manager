import * as fs from "fs";
import * as crypto from "crypto";

export const hash_calculation = (path_to_file) => {
  try {
    var stream = fs.createReadStream(path_to_file);
    var hash = crypto.createHash("sha1");
    hash.setEncoding("hex");

    stream.on("end", function () {
      hash.end();
      console.log(hash.read());
    });

    stream.pipe(hash);
  } catch (error) {
    console.log("Operation failed");
  }
};
