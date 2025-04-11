const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./src/config/db");

dotenv.config(); //load environment variables from .env file
connectDB();

const app = express();

const allowedOrigins = process.env.ALLOWED_ORIGIN || "http://localhost:3000";
app.use(cors({ origin: allowedOrigins }));

app.use(express.json());

app.use("/api", require("./src/routes/jobRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
