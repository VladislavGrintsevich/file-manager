import * as fs from "fs";
import * as zlib from "zlib";

export const brotliCompress = (path_to_file, path_to_destination) => {
  try {
    const readStream = fs.createReadStream(path_to_file);
    const writeStream = fs.createWriteStream(path_to_destination);

    const brotli = zlib.createBrotliCompress();
    readStream.pipe(brotli).pipe(writeStream);
  } catch (error) {
    console.log("Operation failed");
  }
};

export const brotliDecompress = (path_to_file, path_to_destination) => {
  try {
    const readStream = fs.createReadStream(path_to_file);
    const writeStream = fs.createWriteStream(path_to_destination);

    const brotli = zlib.createBrotliDecompress();
    readStream.pipe(brotli).pipe(writeStream);
  } catch (error) {
    console.log("Operation failed");
  }
};
