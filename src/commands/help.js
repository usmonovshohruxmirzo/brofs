import { colors } from "../utils/colors.js";

const help = () => {
  const { brightBlue, cyan, yellow, green, reset } = colors;

  console.log(`${brightBlue}
██████╗ ██████╗  ██████╗ ███████╗███████╗
██╔══██╗██╔══██╗██╔═══██╗██╔════╝██╔════╝
██████╔╝██████╔╝██║   ██║█████╗  ███████╗
██╔══██╗██╔══██╗██║   ██║██╔══╝  ╚════██║
██████╔╝██║  ██║╚██████╔╝██║     ███████║
╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚══════╝
${reset}`);

  console.log(`${cyan}🤖 brofs - The Bro File System CLI${reset}\n`);

  console.log(`📁 ${cyan}Usage:${reset}\n`);

  const logLine = (emoji, command, desc) => {
    console.log(`  ${emoji} ${yellow}${command}${reset}   ${desc}`);
  };

  logLine("🔍", "brofs ls".padEnd(24), "List directory contents");
  logLine("📂", "brofs cd <dir>".padEnd(24), "Change directory");
  logLine("📖", "brofs read <file>".padEnd(24), "Read file content");
  logLine("🆕", "brofs create <file>".padEnd(24), "Create an empty file");
  logLine("❌", "brofs delete <file>".padEnd(24), "Delete a file");
  logLine("✏️ ", "brofs rename <old> <new>".padEnd(24), "Rename a file");
  logLine("🔐", "brofs hash <file>".padEnd(24), "Print SHA256 hash");
  logLine("📦", "brofs zip <in> <out>".padEnd(24), "Gzip compress");
  logLine("🗜️ ", "brofs unzip <in> <out>".padEnd(24), "Gzip decompress");
  logLine("💻", "brofs os".padEnd(24), "Show OS info");
  logLine("🧾", "brofs -v".padEnd(24), "Show Version");
  logLine("❓", "brofs --help".padEnd(24), "Help");

  console.log(`\n${green}Made with ❤️  by Webbro Software${reset}\n`);
};

export { help };
