import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  isEmailVerified: {
    type: Boolean,
    default: false,
  },
  emailToken: {
    type: String,
  },
  role: {
    type: String,
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  phone: {
    type: Number,
  },
  finishedModules: {
    type: [Number],
    default: [],
  },
  group: {
    type: Schema.Types.ObjectId,
    ref: "Groups",
  },
});

const User = models.Users || model("Users", userSchema);

export default User;
