import mongoose from 'mongoose';

const Schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  openLessons: {
    type: Number,
    default: 0,
  },
  isStarted: {
    type: Boolean,
    default: false,
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
    },
  ],
});

const model = mongoose.models.Groups || mongoose.model('Groups', Schema);

export default model;
