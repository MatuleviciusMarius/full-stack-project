import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import connectMongo from '@/utils/connectMongo';
import User from '@/models/User';

export async function loginHandle({ email, password }) {
  console.log('here');
  try {
    await connectMongo();
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('Invalid email');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error('Ivalid password');
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { token, user };
  } catch (err) {
    throw new Error('Server error');
  }
}

export default async function loginHandler(req, res) {
  console.log('here');
  const { email, password } = req.body;

  try {
    await connectMongo();
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid email' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid password' });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token, user });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}
