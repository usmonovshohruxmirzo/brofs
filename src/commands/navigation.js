import process from "process";
import { resolvePath, printSuccess } from "../utils/helpers.js";
import fs from "fs/promises";

const changeDir = (targetPath) => {
  try {
    const newPath = resolvePath(targetPath);
    process.chdir(newPath);
    printSuccess(`Changed directory to ${process.cwd()}`);
  } catch {
    console.error("❌ Failed to change directory.");
  }
};

const listDir = async () => {
  const files = await fs.readdir(process.cwd(), { withFileTypes: true });
  console.log();
  try {
    files.forEach((file) => {
      const type = file.isDirectory() ? "📁" : "📄";
      console.log(`- ${type} ${file.name}`);
    });
  } catch {
    console.error("❌ Unable to list directory.");
  }
};

export { changeDir, listDir };
