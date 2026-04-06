const express = require("express");
const app = express();

// middleware
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("THOS Backend Running 🔥");
});

// sample API (future reviews کیلئے base)
app.get("/api/test", (req, res) => {
  res.json({ message: "API Working ✅" });
});

// port
const PORT = process.env.PORT || 10000;

// server start
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});