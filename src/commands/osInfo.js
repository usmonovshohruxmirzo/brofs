import os from "os";
import { colors } from "../utils/colors.js";

const showOSInfo = () => {
  const { cyan, yellow, green, magenta, reset } = colors;

  console.log();
  console.log(`${cyan}🖥️  OS Info${reset}`);
  console.log(
    `${yellow}- User:      ${reset}${green}${os.userInfo().username}${reset}`
  );
  console.log(`${yellow}- Home dir:  ${reset}${green}${os.homedir()}${reset}`);
  console.log(
    `${yellow}- CPU:       ${reset}${magenta}${os.cpus()[0].model}${reset}`
  );
  console.log(`${yellow}- Arch:      ${reset}${green}${os.arch()}${reset}`);
  console.log(`${yellow}- Platform:  ${reset}${green}${os.platform()}${reset}`);
  console.log();
};

export { showOSInfo };
