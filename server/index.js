const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const fileupload = require("express-fileupload");

const app = express();

// Import routes
const UserRoutes = require("./routes/UserRoutes");
const PropertyRoutes = require("./routes/PropertyRoutes");

//loads environment variables from a .env file into process
dotenv.config();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(fileupload());

// Connect DB
mongoose.connect(
  process.env.DB_CONTEXT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to the mongodb");
  }
);

// Config routes
app.use("/api/users", UserRoutes);
app.use("/api/sell", PropertyRoutes);

app.use("/images", express.static("img"));

// Start server
app.listen(8080, () => {
  console.log("Server is up and running on server on ");
});
