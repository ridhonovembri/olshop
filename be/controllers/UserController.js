const userDb = require("../models/User");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

exports.getAllUser = async (req, res) => {
  // console.log('-----getUser-------')
  try {
    let users = [];

    (await userDb.find({}).sort({ name: -1 })).forEach((user) => {
      users.push(user);
    });

    res.status(200).json({ status: "true", user: users });
  } catch (e) {
    res.status(500).json({ message: "Fetch data is failed" });
  }
};

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await userDb.findOne({ email });

    // console.log('existingUser', existingUser)

    if (existingUser) {
      return res.status(400).json({ message: "email already registered" });
    }

    const newUser = new userDb({ name, email, password });

    newUser.verificationToken = crypto.randomBytes(20).toString("hex");

    await newUser.save();

    res.status(200).json({ message: "Registration success.." });
  } catch (e) {
    console.log("Error during registration", e);
    res.status(500).json({ message: "Registration failed" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  // console.log("email", email);
  // console.log("password", password);

  try {
    const isUserExist = await userDb.findOne({ email });
    // console.log("user", isUserExist);

    if (isUserExist == null) {
      console.log("invalid email");
      return res.status(201).json({ status: 'false', message: "invalid email" });
    }

    if (isUserExist.password !== password) {
      console.log("invalid password");
      return res.status(201).json({ status: 'false', message: "invalid password" });
    }

    const token = jwt.sign({ userId: userDb._id }, secretKey);

    res.status(200).json({ status: "true", token });
  } catch (error) {
    console.log("Login Failed");
    res.status(500).json({ message: "Login Failed" });
  }
};

const generateSecretKey = () => {
  const secretKey = crypto.randomBytes(32).toString("hex");
  return secretKey;
};

const secretKey = generateSecretKey();
