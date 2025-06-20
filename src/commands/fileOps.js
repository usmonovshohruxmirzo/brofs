import fs from "fs/promises";
import { handleError, printSuccess, resolvePath } from "../utils/helpers.js";

const readFile = async (filePath) => {
  try {
    const path = resolvePath(filePath);
    const content = await fs.readFile(path, "utf-8");
    console.log(content);
  } catch {
    handleError("Failed to read file");
  }
};

const createFile = async (filePath) => {
  try {
    const path = resolvePath(filePath);
    await fs.writeFile(path, "");
    printSuccess("File created");
  } catch {
    handleError("Failed to create file.");
  }
};

const removeFile = async (filePath) => {
  try {
    const path = resolvePath(filePath);
    await fs.unlink(path);
    printSuccess("File deleted.");
  } catch {
    handleError("Failed to delete file.");
  }
};

const renameFile = async (oldPath, newPath) => {
  try {
    await fs.rename(resolvePath(oldPath), resolvePath(newPath));
    printSuccess("Renamed successfully.");
  } catch {
    handleError("Rename failed.");
  }
};

export { readFile, createFile, removeFile, renameFile };
