import * as fs from "fs/promises";

export const up = () => {
  process.chdir("..");
};

export const cd = (path_to_directory) => {
  try {
    process.chdir(path_to_directory);
  } catch (error) {
    console.log("Operation failed");
  }
};

export const ls = async () => {
  var path = process.cwd();
  const files = await fs.readdir(path); // Читаем содержимое path
  console.log(files);
};
