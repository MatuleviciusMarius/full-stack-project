import User from "@/models/User";
import Group from "@/models/Group";
import connectMongo from "@/utils/connectMongo";

export default async (req, res) => {
  const { id } = req.query;

  try {
    await connectMongo();
    const user = await User.findById(id, {
      __v: false,
      password: false,
      emailToken: false,
    }).populate("groups");

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};
