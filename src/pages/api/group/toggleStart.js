import Group from "@/models/Group";
import connectMongo from "@/utils/connectMongo";

export default async function toggleStart(req, res) {
  const { groupId } = req.query;

  try {
    await connectMongo();

    const group = await Group.findById(groupId);
    group.isStarted = !group.isStarted;
    await group.save();
    res.status(200).json({ message: "pakeista" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }
}
