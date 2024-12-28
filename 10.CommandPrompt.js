// 10. Design a Terminal/Command Prompt

// Question: Design a terminal emulator that:

// Supports basic commands like ls, mkdir, cd, touch, and pwd.
// Maintains a virtual file system structure in memory.
// Handles invalid commands or paths gracefully.

// Explanation:

// 1. The system needs a structure for directories and files (e.g., a tree-like structure).
// 2. Commands should be processed based on the current directory.
// 3. Operations like navigating (cd) and listing (ls) must respect the virtual hierarchy.

/* -------------------------------------------------------- */
/*   ( The Authentic JS CodeBuff )
 ___ _                      _              _ 
 | _ ) |_  __ _ _ _ __ _ __| |_ __ ____ _ (_)
 | _ \ ' \/ _` | '_/ _` / _` \ V  V / _` || |
 |___/_||_\__,_|_| \__,_\__,_|\_/\_/\__,_|/ |
                                        |__/ 
 */
/* ---------------------------------------------------------   */
/*    Youtube: https://youtube.com/@code-with-Bharadwaj        */
/*    Github :  https://github.com/Manu577228                  */
/* ----------------------------------------------------------- */

// Virtual Terminal System
class VirtualTerminal {
  constructor() {
    this.fileSystem = { "/": {} }; // Root directory
    this.currentPath = "/";
  }

  parsePath(path) {
    let dirs = path.split("/").filter((dir) => dir.length);
    let current = this.fileSystem["/"];
    for (let dir of dirs) {
      if (!current[dir] || typeof current[dir] !== "object") return null;
      current = current[dir];
    }
    return current;
  }

  pwd() {
    return this.currentPath;
  }

  mkdir(dirName) {
    let current = this.parsePath(this.currentPath);
    if (current && !current[dirName]) {
      current[dirName] = {};
    }
  }

  touch(fileName) {
    let current = this.parsePath(this.currentPath);
    if (current && !current[fileName]) {
      current[fileName] = null; // Files are leaf nodes
    }
  }

  ls() {
    let current = this.parsePath(this.currentPath);
    if (current) {
      return Object.keys(current).sort();
    }
    return [];
  }

  cd(dirName) {
    if (dirName === "..") {
      if (this.currentPath !== "/") {
        this.currentPath =
          this.currentPath.slice(0, this.currentPath.lastIndexOf("/")) || "/";
      }
    } else {
      let current = this.parsePath(this.currentPath);
      if (current && current[dirName] && typeof current[dirName] === "object") {
        this.currentPath += this.currentPath === "/" ? dirName : "/" + dirName;
      }
    }
  }
}

// Test Case
let terminal = new VirtualTerminal();
terminal.mkdir("home");
terminal.mkdir("docs");
terminal.cd("home");
terminal.touch("file.txt");
console.log(terminal.pwd()); // Current directory: /home
console.log(terminal.ls()); // List contents: [ 'file.txt' ]
terminal.cd("..");
console.log(terminal.pwd()); // Back to root: /
console.log(terminal.ls()); // List root contents: [ 'docs', 'home' ]
