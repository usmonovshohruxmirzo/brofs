# 🤖 `brofs` - The Bro File System CLI

![image](https://github.com/user-attachments/assets/fc54a856-c2aa-470d-a152-08671db997d5)


A powerful and lightweight command-line **File Manager** built with **Node.js**.
Supports file operations, OS info, hashing, compression, and more.

---

## 🚀 Features

- 📄 Read, create, rename, delete files
- 📂 Change directory, list contents
- 🔐 Hash file contents (SHA256)
- 🖥️ View OS system info
- 🗜️ Compress/decompress files (gzip)

---

## 📦 Installation

```bash
git clone https://github.com/usmonovshohruxmirzo/brofs.git
cd brofs

# Link the CLI globally
npm install
npm link
```

> 🔧 If you're on Windows, ensure this is in your PATH:
> 
> `export PATH=$PATH:/c/Users/ACER_NITRO/AppData/Roaming/npm`

---

## 🛠️ Usage

```bash
brofs <command> [options]
```

---

### 📁 File Operations

| Command                    | Description                 |
| -------------------------- | --------------------------- |
| `brofs read <file>`        | Read and print file content |
| `brofs create <file>`      | Create an empty file        |
| `brofs delete <file>`      | Delete a file               |
| `brofs rename <old> <new>` | Rename a file               |

---

### 📂 Directory Navigation

| Command          | Description                  |
| ---------------- | ---------------------------- |
| `brofs cd <dir>` | Change working directory     |
| `brofs ls`       | List contents of current dir |

---

### 🧠 OS Information

| Command    | Description         |
| ---------- | ------------------- |
| `brofs os` | Show OS system info |

---

### 🔐 File Hashing

| Command             | Description       |
| ------------------- | ----------------- |
| `brofs hash <file>` | Print SHA256 hash |

---

### 🗜️ File Compression

| Command                        | Description          |
| ------------------------------ | -------------------- |
| `brofs zip <input> <output>`   | Gzip compress file   |
| `brofs unzip <input> <output>` | Gzip decompress file |

---

## 🔧 Project Structure

```
file-manager-cli/
├── package.json
└── src/
    ├── index.js            # CLI entry point
    └── commands/
        ├── fileOps.js
        ├── navigation.js
        ├── osInfo.js
        ├── hash.js
        └── compress.js
```

---

## 🧠 How It Works (Updated)

- Written in **ES Modules** (`"type": "module"` in `package.json`)
- Uses **`process.argv`** for manual CLI parsing (no 3rd-party CLI lib)
- Uses **`fs/promises`**, **`stream/promises`**, and **`zlib`** for efficient async file handling
- Clean and minimal CLI structure, following UNIX-like commands
- Fully modular - each command is organized under `src/commands/`
- `--help` is routed to a custom, styled **dashboard.js**

---

## 🧪 Example

```bash
brofs create test.txt
brofs read test.txt
brofs rename test.txt renamed.txt
brofs delete renamed.txt
brofs cd src
brofs ls
brofs os
brofs hash package.json
brofs zip package.json compressed.gz
brofs unzip compressed.gz decompressed.json
```

---

## 🧑‍💻 Author

- **Shohruhmirzo Usmonov**
- GitHub: [usmonovshohruxmirzo](https://github.com/usmonovshohruxmirzo)

---

## 📜 License

[MIT License](./LICENSE)
