const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const JWT_SECRET = "your_jwt_secret_key";

exports.signup = (req, res) => {
  const { name, email, password } = req.body;

  User.getUserByEmail(email, (err, results) => {
    if (err) return res.status(500).send("Database error");
    if (results.length > 0) return res.status(400).send("Email already registered");

    User.createUser(name, email, password, (err) => {
      if (err) return res.status(500).send("Error registering user");
      res.status(201).send("User registered successfully");
    });
  });
};

exports.signin = (req, res) => {
  const { email, password } = req.body;

  User.getUserByEmail(email, async (err, results) => {
    if (err) return res.status(500).send("Database error");
    if (results.length === 0) return res.status(400).send("Invalid email or password");

    const user = results[0];

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send("Invalid email or password");

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ message: "SignIn successful", token });
  });
};
