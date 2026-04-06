const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Test route
app.get("/", (req, res) => {
  res.send("THOS Backend Running 🚀");
});

// Reels API (future use)
app.get("/reels", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Sample Reel 1",
      videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
      likes: 120
    },
    {
      id: 2,
      title: "Sample Reel 2",
      videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
      likes: 95
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});