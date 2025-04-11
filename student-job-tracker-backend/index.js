const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const connectDB = require("./src/config/db");

dotenv.config(); // Load environment variables from .env file
connectDB();

const app = express();

const allowedOrigins = process.env.ALLOWED_ORIGIN || "*";
app.use(cors({ origin: allowedOrigins === "*" ? true : allowedOrigins }));

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        fontSrc: ["'self'", "data:", "https:"],
        styleSrc: ["'self'", "'unsafe-inline'", "https:"],
        scriptSrc: ["'self'", "'unsafe-inline'", "https:"],
        connectSrc: ["'self'", "https:"],
        imgSrc: ["'self'", "data:", "https:"],
      },
    },
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Student Job Tracker API");
});

app.use("/api", require("./src/routes/jobRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
