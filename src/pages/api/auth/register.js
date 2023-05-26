import connectMongo from '@/utils/connectMongo';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import emailjs, { SMTPClient } from 'emailjs';

export default async function registerHandler(req, res) {
  const { name, email, password } = req.body;

  try {
    await connectMongo();
    const user = await User.findOne({ email });

    if (user) {
      return res.status(409).json({ error: 'User already exists' });
    }

    const emailToken = jwt.sign({ email }, process.env.JWT_SECRET);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      emailToken,
    });

    await newUser.save();

    const client = new SMTPClient({});

    // Send verification email to the user
    res.status(201).json({ message: 'New user created successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'server error' });
  }
}
