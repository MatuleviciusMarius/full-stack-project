import connectMongo from '@/utils/connectMongo';
import Group from '@/models/Group';

export default async function updateGroup(req, res) {
  try {
    await connectMongo();
    const { groupId, name, openLessons, startDate } = req.body;

    if (!groupId) {
      return res.status(400).json({ message: 'no groupId provided' });
    }

    const group = await Group.findById(groupId);

    if (name) {
      group.name = name;
    }

    if (openLessons) {
      group.openLessons = openLessons;
    }

    if (startDate) {
      group.startDate = startDate;
    }

    await group.save();
    res.status(200).json({ message: 'updated successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'something went wrong' });
  }
}
