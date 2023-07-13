import User from "@/models/User";
import connectMongo from "@/utils/connectMongo";

export default async (req, res) => {
  const { moduleId, userId } = req.query;
  try {
    await connectMongo();
    const user = await User.findById(userId);

    if (req.method === "POST") {
      if (user.finishedModules) {
        if (!user.finishedModules.includes(+moduleId)) {
          user.finishedModules.push(+moduleId);
        }
      } else {
        user.finishedModules = [moduleId];
      }

      await user.save();
    } else if (req.method === "DELETE") {
      const filteredFinishedModules = user.finishedModules.filter(
        (element) => element !== +moduleId
      );
      user.finishedModules = filteredFinishedModules;
      await user.save();
    }

    res.status(200).json({ message: "Success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};
