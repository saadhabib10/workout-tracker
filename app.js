// app.js
// Main entry point for the Workout Tracker application

const express = require("express");
const app = express();

// Load environment variables from .env file
require("dotenv").config();

// Connect to MongoDB (this file uses mongoose to connect)
const connectDB = require("./config/db");
connectDB(); // Run the DB connection function

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Allow Express to read form data (POST requests)
app.use(express.urlencoded({ extended: true }));

// Serve static files (CSS, images, JS)
app.use(express.static("public"));

// Load workout routes
const workoutRoutes = require("./routes/workoutRoutes");
app.use("/workouts", workoutRoutes);

// Home page route
app.get("/", (req, res) => {
    res.render("home"); // renders views/home.ejs
});

// Start the server
app.listen(process.env.PORT, () => {
    console.log("Server running on port:", process.env.PORT);
});
