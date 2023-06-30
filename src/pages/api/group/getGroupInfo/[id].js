import connectMongo from '@/utils/connectMongo';
import Group from '@/models/Group';

export default async (req, res) => {
  const { id } = req.query;

  try {
    await connectMongo();
    const group = await Group.findById(id);

    res.status(200).json({ group });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};
