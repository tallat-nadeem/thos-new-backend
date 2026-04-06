export default function handler(req, res) {
  res.status(200).json([
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
}