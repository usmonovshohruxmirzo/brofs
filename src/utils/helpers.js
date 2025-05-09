export async function handleCommand(command, currentDir) {
  if (command === "up" || command.startsWith("cd ") || command === "ls") {
    return await handleNavigation(command, currentDir);
  }
}
