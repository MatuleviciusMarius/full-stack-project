import User from "@/models/User";
import connectMongo from "@/utils/connectMongo";
import bcrypt from "bcryptjs";

export default async function changePassword(req, res) {
  const { id, password } = req.query;
  try {
    await connectMongo();
    const user = await User.findById(id);

    if (user) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      user.password = hashedPassword;
      await user.save();

      res.status(200).json({ message: "Success" });
    } else {
      res.status(404).json({ message: "user not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
}
