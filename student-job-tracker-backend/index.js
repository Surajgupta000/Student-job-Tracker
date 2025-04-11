const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./src/config/db");

dotenv.config(); //load environment variables from .env file
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", require("./src/routes/jobRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
