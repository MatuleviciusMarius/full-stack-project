import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import connectMongo from '@/utils/connectMongo';
import User from '@/models/User';

export async function loginHandle({ email, password }) {
  try {
    await connectMongo();
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('Invalid email');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error('Invalid password');
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
