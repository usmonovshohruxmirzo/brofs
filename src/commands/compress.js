import { createGzip, createGunzip } from "zlib";
import { pipeline } from "stream";
import { promisify } from "util";
import fs from "fs";

const pipe = promisify(pipeline);

const compressFile = async (input, output) => {
  try {
    await pipe(
      fs.createReadStream(input),
      createGzip(),
      fs.createWriteStream(output)
    );
    console.log("✅ Compressed");
  } catch {
    console.error("❌ Compression failed.");
  }
};

const decompressFile = async (input, output) => {
  try {
    await pipe(
      fs.createReadStream(input),
      createGunzip(),
      fs.createWriteStream(output)
    );
    console.log("✅ Decompressed");
  } catch {
    console.error("❌ Decompression failed.");
  }
};

export { compressFile, decompressFile };
