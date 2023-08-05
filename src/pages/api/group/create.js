import Group from "@/models/Group";
import connectMongo from "@/utils/connectMongo";

export default async function createHandler(req, res) {
  const { name, startDate } = req.body;
  try {
    await connectMongo();
    console.log(name, startDate);
    const newGroup = new Group({
      name,
      startDate,
    });
    await newGroup.save();
    res.status(201).json({ message: "New group created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }
}
