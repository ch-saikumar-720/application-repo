require("dotenv").config();

const express = require("express");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", productRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running");
});

// Health Check Endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP"
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
