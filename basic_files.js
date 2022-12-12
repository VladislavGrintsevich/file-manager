import * as fs from "fs/promises";

export const cat = async (path_to_file) => {
  try {
    let fileContent = await fs.readFile(path_to_file, "utf8");
    console.log(fileContent);
  } catch (error) {
    console.log("Operation failed");
  }
};

export const add = async (new_file_name) => {
  try {
    fs.writeFile(new_file_name, "");
  } catch (error) {
    console.log("Operation failed");
  }
};

export const rn = async (path_to_file, new_filename) => {
  try {
    fs.rename(path_to_file, new_filename);
  } catch (error) {
    console.log("Operation failed");
  }
};

export const cp = async (path_to_file, path_to_new_directory) => {
  try {
    fs.copyFile(path_to_file, path_to_new_directory);
  } catch (error) {
    console.log("Operation failed");
  }
};

export const mv = async (path_to_file, path_to_new_directory) => {
  try {
    fs.copyFile(path_to_file, path_to_new_directory);
    fs.rm(path_to_file);
  } catch (error) {
    console.log("Operation failed");
  }
};

export const rm = async (path_to_file) => {
  try {
    fs.rm(path_to_file);
  } catch (error) {
    console.log("Operation failed");
  }
};
