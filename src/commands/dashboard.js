const showDashboard = () => {
  const brightBlue = "\x1b[94m";
  const cyan = "\x1b[36m";
  const reset = "\x1b[0m";

  console.log(`${brightBlue}
    ██████╗ ██████╗  ██████╗ ███████╗███████╗
    ██╔══██╗██╔══██╗██╔═══██╗██╔════╝██╔════╝
    ██████╔╝██████╔╝██║   ██║█████╗  ███████╗
    ██╔══██╗██╔══██╗██║   ██║██╔══╝  ╚════██║
    ██████╔╝██║  ██║╚██████╔╝██║     ███████║
    ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚══════╝
        ${reset}`);

  console.log(`${cyan}🤖 brofs - The Bro File System CLI${reset}`);

  console.log("\n📁 \x1b[36mUsage:\x1b[0m");

  console.log(
    "  🔍 \x1b[33mbrofs ls\x1b[0m                   List directory contents"
  );
  console.log(
    "  📂 \x1b[33mbrofs cd <dir>\x1b[0m             Change directory"
  );
  console.log(
    "  📖 \x1b[33mbrofs read <file>\x1b[0m          Read file content"
  );
  console.log(
    "  🆕 \x1b[33mbrofs create <file>\x1b[0m        Create an empty file"
  );
  console.log("  ❌ \x1b[33mbrofs delete <file>\x1b[0m        Delete a file");
  console.log("  ✏️  \x1b[33mbrofs rename <old> <new>\x1b[0m   Rename a file");
  console.log(
    "  🔐 \x1b[33mbrofs hash <file>\x1b[0m          Print SHA256 hash"
  );
  console.log("  📦 \x1b[33mbrofs zip <in> <out>\x1b[0m       Gzip compress");
  console.log(
    "  🗜️  \x1b[33mbrofs unzip <in> <out>\x1b[0m     Gzip decompress"
  );
  console.log("  💻 \x1b[33mbrofs os\x1b[0m                   Show OS info");
  console.log("  🧾 \x1b[33mbrofs -v\x1b[0m                   Show Version");
  console.log("  ❓ \x1b[33mbrofs --help\x1b[0m               Help");

  console.log("\n\x1b[32mMade with ❤️  by Webbro Software\x1b[0m\n");
};

export { showDashboard };
