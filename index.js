import * as nwd from "./nwd.js";
import * as fails from "./basic_files.js";
import * as os from "./os.js";
import * as hash from "./hash.js";
import * as brotli from "./brotli.js";

let str = process.argv.slice(2).toString();
let index = str.indexOf("=");
let username = str.slice(index + 1, str.length);

console.log(`Welcome to the File Manager, ${username}!`);
console.log("You are currently in " + process.cwd());

process.stdin.on("data", (data) => {
  let chunk = data.toString().trim();
  let ind = chunk.indexOf(" ");
  let cmd = "",
    path_to_file = "",
    path_to_new_directory = "";

  if (ind !== -1) {
    cmd = chunk.slice(0, ind);
    path_to_file = chunk.slice(ind + 1, chunk.length).toString();

    let ind1 = path_to_file.indexOf(" ");
    if (ind1 !== -1) {
      path_to_new_directory = path_to_file
        .slice(ind1 + 1, path_to_file.length)
        .toString();
      path_to_file = path_to_file.slice(0, ind1).toString();
    }
  } else {
    cmd = chunk;
  }

  switch (cmd) {
    case "up":
      nwd.up();
      break;
    case "cd":
      nwd.cd(path_to_file);
      break;
    case "ls":
      nwd.ls();
      break;

    case "cat":
      fails.cat(path_to_file);
      break;
    case "add":
      fails.add(path_to_file);
      break;
    case "rn":
      fails.rn(path_to_file, path_to_new_directory);
      break;
    case "cp":
      fails.cp(path_to_file, path_to_new_directory);
      break;
    case "mv":
      fails.mv(path_to_file, path_to_new_directory);
      break;
    case "rm":
      fails.rm(path_to_file);
      break;

    case "os":
      os.comand(path_to_file);
      break;

    case "hash":
      hash.hash_calculation(path_to_file);
      break;

    case "compress":
      brotli.brotliCompress(path_to_file, path_to_new_directory);
      break;
    case "decompress":
      brotli.brotliDecompress(path_to_file, path_to_new_directory);
      break;

    case ".exit": {
      console.log(`Thank you for using File Manager, ${username}!`);
      process.exit();
    }

    default:
      console.log("Invalid input");
  }

  console.log("You are currently in " + process.cwd());
});

process.on("SIGINT", () => {
  console.log(`Thank you for using File Manager, ${username}!`);
  process.exit();
});
