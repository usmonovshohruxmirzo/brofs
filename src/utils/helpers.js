import path from "path";
import os from "os";

const resolvePath = (inputPath) => {
  inputPath ? path.resolve(process.cwd(), inputPath) : process.cwd();
};

const handleError = (msg) => {
  console.error(`❌ ${msg}`);
};

const printSuccess = (msg) => {
  console.log(`✅ ${msg}`);
};

const getUserName = () => os.userInfo().username;

export { resolvePath, handleError, printSuccess, getUserName };
