import os from "os";

const showOSInfo = () => {
  console.log("🖥️ OS Info");
  console.log("User:", os.userInfo().username);
  console.log("Home dir:", os.homedir());
  console.log("CPU:", os.cpus()[0].model);
  console.log("Arch:", os.arch());
  console.log("Platform:", os.platform());
};

export { showOSInfo };
