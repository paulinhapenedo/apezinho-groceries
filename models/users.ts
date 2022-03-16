import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  image: string;
}

const UserSchema: Schema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    image: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.models.User || (mongoose.model('Grocery', UserSchema) as Model<IUser>);
