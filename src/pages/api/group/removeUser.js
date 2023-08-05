import User from "@/models/User";
import Group from "@/models/Group";
import connectMongo from "@/utils/connectMongo";

export default async function removeUser(req, res) {
  const { userid, groupid } = req.query;

  try {
    await connectMongo();

    const user = await User.findById(userid);
    const group = await Group.findById(groupid);

    if (!user || !group) {
      return res.status(400).json({ message: "User or group does not exist" });
    }

    user.group = undefined;
    group.users = group.users.filter((user) => !user.equals(userid));

    await user.save();
    await group.save();

    res.status(200).json({ message: "User removed from group successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }
}
