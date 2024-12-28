// 15. Design Authentication Service

// Question: Design an authentication service that:

// Handles user registration and login.
// Supports session management with tokens.
// Includes password hashing for security.

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

const crypto = require("crypto");

class AuthService {
  constructor() {
    this.users = {}; // {username: {passwordHash, token}}
  }

  hashPassword(password) {
    return crypto.createHash("sha256").update(password).digest("hex");
  }

  generateToken() {
    return crypto.randomBytes(16).toString("hex");
  }

  register(username, password) {
    if (this.users[username]) return false;
    let passwordHash = this.hashPassword(password);
    this.users[username] = { passwordHash, token: null };
    return true;
  }

  login(username, password) {
    let user = this.users[username];
    if (!user || user.passwordHash !== this.hashPassword(password)) return null;
    let token = this.generateToken();
    user.token = token;
    return token;
  }

  logout(username) {
    if (!this.users[username]) return false;
    this.users[username].token = null;
    return true;
  }

  isAuthenticated(username, token) {
    return this.users[username] && this.users[username].token === token;
  }
}

// Test Case

let auth = new AuthService();
auth.register("user1", "password123");
let token = auth.login("user1", "password123");
console.log(token); // Session Token
console.log(auth.isAuthenticated("user1", token)); // true
auth.logout("user1");
console.log(auth.isAuthenticated("user1", token)); // false
