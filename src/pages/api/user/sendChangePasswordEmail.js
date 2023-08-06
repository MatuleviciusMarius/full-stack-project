import User from "@/models/User";
import connectMongo from "@/utils/connectMongo";
import nodemailer from "nodemailer";

export default async function sendChangePasswordEmail(req, res) {
  const { email } = req.query;
  try {
    await connectMongo();

    const user = await User.findOne({ email: email });

    if (user) {
      let transporter = nodemailer.createTransport({
        host: "smtp.titan.email",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASS,
        },
      });
      const changePasswordLink = `${process.env.HOST}/changePassword?userid=${user._id}`;

      let mailOptions = {
        from: '"noreply" <noreply@mydreamworld.lt>',
        to: email,
        subject: "Keisti slaptažodį",
        text: `Norėdami pakeisti savo slaptažodį paspauskite šią nuorodą ${changePasswordLink}`,
        html: `<b>Norėdami pakeisti savo slaptažodį paspauskite šią nuorodą <a href="${changePasswordLink}">${changePasswordLink}</a></b>`,
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: "emailas issiustas" });
    } else {
      res.status(404).json({ message: "Vartotojas nerastas" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
}
