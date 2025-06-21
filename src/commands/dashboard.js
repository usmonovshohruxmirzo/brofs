const showDashboard = () => {
  console.log(`
    ██████╗ ██████╗  ██████╗ ███████╗███████╗
    ██╔══██╗██╔══██╗██╔═══██╗██╔════╝██╔════╝
    ██████╔╝██████╔╝██║   ██║█████╗  ███████╗
    ██╔══██╗██╔══██╗██║   ██║██╔══╝  ╚════██║
    ██████╔╝██║  ██║╚██████╔╝██║     ███████║
    ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚══════╝
    `);

  console.log("🤖 brofs - The Bro File System CLI");
  console.log("\n📁 Usage:\n");

  console.log("  🔍  brofs ls                   List directory contents");
  console.log("  📂  brofs cd <dir>             Change directory");
  console.log("  📖  brofs read <file>          Read file content");
  console.log("  🆕  brofs create <file>        Create an empty file");
  console.log("  🗑️  brofs delete <file>        Delete a file");
  console.log("  ✏️   brofs rename <old> <new>   Rename a file");
  console.log("  🔐  brofs hash <file>          Print SHA256 hash");
  console.log("  📦  brofs zip <in> <out>       Gzip compress");
  console.log("  🗜️  brofs unzip <in> <out>     Gzip decompress");
  console.log("  💻  brofs os                   Show OS info");
  console.log("  🧾  brofs -v                   Show Version");
  console.log("  ❓  brofs --help               Help");

  console.log("\nMade with ❤️  by Webbro Software\n");
};

export { showDashboard };
