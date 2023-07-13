import User from "@/models/User";
import Group from "@/models/Group";
import connectMongo from "@/utils/connectMongo";

export default async function getAll(req, res) {
  try {
    await connectMongo();

    const users = await User.find({}, { password: false, emailToken: false, __v: false });

    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
}
