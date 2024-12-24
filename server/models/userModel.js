const db = require("../config/db");
const bcrypt = require("bcrypt");

class User {
  static async createUser(name, email, password, callback) {
    const hashedPassword = await bcrypt.hash(password, 10);
    db.query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword],
      callback
    );
  }

  static getUserByEmail(email, callback) {
    db.query("SELECT * FROM users WHERE email = ?", [email], callback);
  }
}

module.exports = User;
