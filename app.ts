import express = require("express");
import passport = require("passport");
import configure from "./config/passport";
import router from "./routes";
import dotenv from "dotenv";
dotenv.config();

// Create the Express application
const app = express();

// Configures the database and opens a global connection that can be used in any module with `mongoose.connection`
require("./config/database");

// Pass the global passport object into the configuration function
configure(passport);

// This will initialize the passport object on every request
app.use(passport.initialize());

// Instead of using body-parser middleware, use the new Express implementation of the same thing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Imports all of the routes from ./routes/index.j
app.use(router);

// Server listens on http://localhost:3000
app.listen(3000);