const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workout");

// dotenv variables
require("dotenv").config();
const PORT = process.env.PORT;
const MONGO = process.env.MONGO_URI;

// Express app
const app = express();

// Log middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log("Log middleware", req.path, req.method);
  next();
});

// Routes
app.use("/api/workout", workoutRoutes);

// connect to db
mongoose
  .connect(MONGO)
  .then(() => {
    // Listen for requests
    app.listen(PORT, () => {
      console.log(`Listening to port ${PORT}`)
    });
  })
  .catch((error) => {
    console.log("Error connecting database", error);
  });
