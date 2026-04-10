export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      title: "Reel 1",
      videoUrl: "https://res.cloudinary.com/dpyhtaokv/video/upload/v1774863776/255584f9ff5a84c596dab3fc8ecce2fa_c4sg3n.mp4",
      likes: 120
    },
    {
      id: 2,
      title: "Reel 2",
      videoUrl: "https://res.cloudinary.com/dpyhtaokv/video/upload/v1774863665/2e96151bdd29f1915b8a8e421514a03d_k0z2gp.mp4",
      likes: 95
    },
    {
      id: 3,
      title: "Reel 3",
      videoUrl: "https://res.cloudinary.com/dpyhtaokv/video/upload/v1774861577/VID-20260303-WA0132_ulcssw.mp4",
      likes: 60
    },
    {
      id: 4,
      title: "Reel 4",
      videoUrl: "https://res.cloudinary.com/dpyhtaokv/video/upload/v1774863879/63393575ebb4c7191653950467008f63_howxjw.mp4",
      likes: 200
    }
  ]);
}