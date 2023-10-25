import connectMongo from "@/utils/connectMongo";
import Group from "@/models/Group";

export default async (req, res) => {
  const { id } = req.query;

  try {
    await connectMongo();
    const openModules = await Group.findById(id, { openLessons: 1 });

    res.status(200).json({ openLessons: openModules.openLessons });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
