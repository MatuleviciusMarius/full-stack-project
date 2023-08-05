import User from "@/models/User";
import Group from "@/models/Group";
import connectMongo from "@/utils/connectMongo";
import { Types } from "mongoose";

export default async function addUser(req, res) {
  const { userId, groupId } = req.body;

  try {
    await connectMongo();

    const user = await User.findById(userId);
    const group = await Group.findById(groupId);

    if (!user) {
      return res.status(400).json({ message: "User with this id does not exist" });
    }
    if (!group) {
      return res.status(400).json({ message: "Group with this id does not exist" });
    }

    const mongooseuserid = new Types.ObjectId(userId);
    const mongoosegroupid = new Types.ObjectId(groupId);

    if (!group.users.includes(mongooseuserid)) {
      group.users.push(mongooseuserid);
      await group.save();
    }
    console.log("here");
    console.log(user.group);
    console.log(!user.group === mongoosegroupid);
    user.group = mongoosegroupid;
    await user.save();

    res.status(200).json({ message: "User added to group successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }
}
