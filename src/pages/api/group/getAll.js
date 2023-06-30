import Group from '@/models/Group';
import connectMongo from '@/utils/connectMongo';

export default async function getAll(req, res) {
  try {
    await connectMongo();

    const groups = await Group.find({}).populate('users');

    res.status(200).json({ groups });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'server error' });
  }
}
