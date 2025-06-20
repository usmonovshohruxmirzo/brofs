#!/usr/bin/env node
import { program } from "commander";
import * as fileOps from "./commands/fileOps.js";
import * as nav from "./commands/navigation.js";
import * as osInfo from "./commands/osInfo.js";
import * as hash from "./commands/hash.js";
import * as zip from "./commands/compress.js";

program
  .name("brofs")
  .description("🤖 brofs - The Bro File System CLI")
  .version("1.0.0");

program.command("read <file>").action(fileOps.readFile);
program.command("create <file>").action(fileOps.createFile);
program.command("delete <file>").action(fileOps.removeFile);
program.command("rename <old> <new>").action(fileOps.renameFile);

program.command("cd <dir>").action(nav.changeDir);
program.command("ls").action(nav.listDir);

program.command("os").action(osInfo.showOSInfo);

program.command("hash <file>").action(hash.calculateHash);

program.command("zip <input> <output>").action(zip.compressFile);
program.command("unzip <input> <output>").action(zip.decompressFile);

program.parse(process.argv);
