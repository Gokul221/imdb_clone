/* Handles core setup and application configuration
-> Handles application-level logic
-> Exports the app instance for reuse in other modules
-> Middleware, routes, error handling */

require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const User = require("./models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json()); // express can't handle json data by default

app.get("/", (req, res) => {
  res.send("<h1>Hello from auth system</h1>");
});

// handle registration
app.post("/register", async (req, res) => {
  try {
    // get all info from the user
    const { userName, email, password } = req.body;

    // check mandatory fields
    if (!(userName && email && password)) {
      res.status(400).send("All fields are required");
    }

    // handle already registered user
    const existingUser = await User.findOne({ email }); // find the given email in the User Model ('users' collection in MongoDb)
    if (existingUser) {
      res.status(401).send("User already exists");
    }

    // create a user (not saved yet)
    const user = await User.create({
      userName,
      email: email.toLowerCase(),
      password: password,
    });

    user.password = undefined;

    res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
});

// handle login
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send("Field is missing");
    }
    const user = await User.findOne({ email });
    const passwordIsCorrect = await bcrypt.compare(password, user.password);
    if (user && passwordIsCorrect) {
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.SECRET_KEY,
        {
          expiresIn: "2h",
        }
      );
      user.token = token;
      user.password = undefined;
      res.status(200).json(user);
    }
    res.status(400).send("Email or Password is incorrect");
  } catch (error) {
    console.log(error);
  }
});

module.exports = app;
