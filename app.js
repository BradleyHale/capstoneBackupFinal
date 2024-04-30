"use strict";
require("dotenv").config();
const session = require("express-session");
const redis = require("ioredis");
const RedisStore = require("connect-redis").default;
const path = require('path');
const express = require("express");
const cors = require("cors");
// app libraries
const bodyParser = require("body-parser");
const app = express();
// initializing render engine
app.use(express.static("public", {
   index: "index.html",
   extensions: ['html']
}));
// session management configuration
const sessionConfig = {
  store: new RedisStore({ client: new redis()}),
  port: 6379,
  host: 'localhost',
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  name: "session",
  cookie: {
      httpOnly: true,
      maxAge: 60000 * 10, // exactly 10 minute, using this to test sessions
  }
};

console.log(session);

// initializing session parser
const sessionParser = session(sessionConfig);
app.use(sessionParser);
console.log(sessionParser);
// initializing view engine and JSON parsings
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'capstone-frontend', 'dist')));
app.use(express.json());

// Allow requests from specific origins
const corsOptions = {
  origin: 'http://localhost:8080', // Replace with your client's origin
};

// Use CORS middleware with options
app.use(cors(corsOptions))

// requiring controllers
const planController = require("./Controllers/planController");
const userController = require("./Controllers/userController");
// requiring models
const userModel = require("./Models/userModel");
// endpoints
app.get("/", (req, res) => {
  res.render("index", {"loggedIn": req.session?.user?.isLoggedIn});
});
app.get("/api/search", planController.searchByOperations);
app.get("/results/:planID",planController.renderSingleResult);
app.post("/api/add",planController.addToDatabase);
app.post("/api/edit",planController.editPlan);
app.post("/api/delete", planController.deletePlan);
app.post('/register', async (req, res) => {
   let { email, password } = req.body;
 
   try {
     // Check if user already contro
     const existingUser = await userModel.getUserByEmail(email);
     if (existingUser) {
       return res.status(400).send('User already exists');
     }
 
     // Add user to the database
     const userID = await userModel.addUser(email, password);
     if (!userID) {
       return res.status(500).send('Error registering user');
     }
 
     console.log('User registered successfully');
     res.status(201).json({ userID });
   } catch (error) {
     console.error('Error registering user:', error);
     res.status(500).send('Internal Server Error');
   }
 });
 
 // Login endpoint
 app.post('/login', userController.logIn);
 app.post("/register", userController.createNewUser);

 app.post("/logout", (req, res) => {
  console.log("the server has reached the logout endpoint");
  req.session.email = null;
  req.session.save();
  req.session.regenerate(function (err) {

    res.redirect('/search');

  })

 });

app.listen(3000, () => {
  console.log("the server is running on port 3000");
});
module.exports = {
   app,
   sessionParser
};