import User from '@/models/User';
import jwt from 'jsonwebtoken';
import connectMongo from '@/utils/connectMongo';

export default async (req, res) => {
  const { token } = req.query;

  try {
    const { email } = jwt.verify(token, process.env.JWT_SECRET);
    await connectMongo();
    const user = await User.findOne({ email });

    if (user && user.emailToken === token) {
      user.emailToken = null;
      user.isEmailVerified = true;
      await user.save();

      res.redirect('/registration/success');
    } else {
      res.redirect('/registration/failure');
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};
