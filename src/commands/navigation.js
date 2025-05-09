import path from "path";
import { promises as fs } from "fs";

export async function handleNavigation(command, currentDir) {
  try {
    if (command === "up") {
      const parentDir = path.dirname(currentDir);
      return parentDir === currentDir ? currentDir : parentDir;
    }

    if (command.startsWith("cd ")) {
      const targetPath = path.resolve(currentDir, command.slice(3).trim());
      const stats = await fs.stat(targetPath);
      if (stats.isDirectory()) return targetPath;
    }

    if (command === "ls"){
        
    }
  } catch (error) {
    console.log("Operation files");
  }

  return currentDir;
}
