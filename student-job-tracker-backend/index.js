const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./src/config/db");
const helmet = require("helmet"); // Add this at the top

dotenv.config(); //load environment variables from .env file
connectDB();

const app = express();

const allowedOrigins = process.env.ALLOWED_ORIGIN || "*";
app.use(cors({ origin: allowedOrigins === "*" ? true : allowedOrigins }));

app.use(
  helmet({
    contentSecurityPolicy: {  res.send("Welcome to the Student Job Tracker API");
      directives: {
        defaultSrc: ["'self'"],
        fontSrc: ["'self'", "data:", "https:"],app.use("/api", require("./src/routes/jobRoutes"));
















app.listen(PORT, () => console.log(`Server running on port ${PORT}`));const PORT = process.env.PORT || 5000;app.use("/api", require("./src/routes/jobRoutes"));app.use(express.json()););  })    },      },        imgSrc: ["'self'", "data:", "https:"],        connectSrc: ["'self'", "https:"],        scriptSrc: ["'self'", "'unsafe-inline'", "https:"],        styleSrc: ["'self'", "'unsafe-inline'", "https:"],
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
