import { createHash } from "crypto";
import fs from "fs";

const calculateHash = (filePath) => {
  try {
    const hash = createHash("sha256");
    const stream = fs.createReadStream(filePath);
    stream.on("data", (chunk) => hash.update(chunk));
    stream.on("end", () => console.log("SHA256:", hash.digest("hex")));
    stream.on("error", () => console.error("❌ Could not calculate hash."));
  } catch {
    console.error("❌ Could not calculate hash.");
  }
};

export { calculateHash };
