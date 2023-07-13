import connectMongo from "@/utils/connectMongo";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

export default async function registerHandler(req, res) {
  const { name, email, password, phone } = req.body;

  try {
    await connectMongo();
    const user = await User.findOne({ email });

    if (user) {
      return res.status(409).json({ error: "User already exists" });
    }

    const emailToken = jwt.sign({ email }, process.env.JWT_SECRET);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      emailToken,
      phone,
    });

    await newUser.save();

    let transporter = nodemailer.createTransport({
      host: "smtp.titan.email",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });
    const confirmationUrl = `${process.env.HOST}/api/auth/confirm/${emailToken}`;

    let mailOptions = {
      from: '"noreply" <noreply@mariusmatulevicius.site>',
      to: email,
      subject: "Email Confirmation",
      text: `Thank you for signing up. Please confirm your email by clicking the following link: ${confirmationUrl}`,
      html: `<b>Thank you for signing up. Please confirm your email by clicking the following link: <a href="${confirmationUrl}">${confirmationUrl}</a></b>`,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: "New user created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }
}
