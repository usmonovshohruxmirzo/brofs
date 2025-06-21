#!/usr/bin/env node
import {
  readFile,
  createFile,
  removeFile,
  renameFile,
} from "./commands/fileOps.js";
import { changeDir, listDir } from "./commands/navigation.js";
import { showOSInfo } from "./commands/osInfo.js";
import { calculateHash } from "./commands/hash.js";
import { compressFile, decompressFile } from "./commands/compress.js";

const args = process.argv.slice(2);
const [command, ...rest] = args;

switch (command) {
  case "read":
    await readFile(rest[0]);
    break;
  case "create":
    await createFile(rest[0]);
    break;
  case "delete":
    await removeFile(rest[0]);
    break;
  case "rename":
    await renameFile(rest[0], rest[1]);
    break;
  case "cd":
    await changeDir(rest[0]);
    break;
  case "ls":
    await listDir();
    break;
  case "os":
    await showOSInfo();
    break;
  case "hash":
    await calculateHash(rest[0]);
    break;
  case "zip":
    await compressFile(rest[0], rest[1]);
    break;
  case "unzip":
    await decompressFile(rest[0], rest[1]);
    break;
  case "-v":
    console.log("v1.0.0");
    break;
  case "--help":
    console.log(`
██████╗ ██████╗  ██████╗ ███████╗███████╗
██╔══██╗██╔══██╗██╔═══██╗██╔════╝██╔════╝
██████╔╝██████╔╝██║   ██║█████╗  ███████╗
██╔══██╗██╔══██╗██║   ██║██╔══╝  ╚════██║
██████╔╝██║  ██║╚██████╔╝██║     ███████║
╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚══════╝
                                         
🤖 brofs - The Bro File System CLI

Usage:
  brofs ls                   List directory contents
  brofs cd <dir>             Change directory
  brofs read <file>          Read file content
  brofs create <file>        Create an empty file
  brofs delete <file>        Delete a file
  brofs rename <old> <new>   Rename a file
  brofs hash <file>          Print SHA256 hash
  brofs zip <in> <out>       Gzip compress
  brofs unzip <in> <out>     Gzip decompress
  brofs os                   Show OS info
  brofs -v                   Show Version
  brofs -h                   Help
    `);
    break;

  default:
    console.log(
      `❌ Unknown command: "${command}". Use --help to see available commands.`
    );
}
