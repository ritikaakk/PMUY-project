import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  name: string;
  aadhar: string;
  address: string;
  income: number;
  phone: string;
  email: string;
  status: string;
  subsidyAmount: number;
  officerName?: string;
  connectionDate?: string;
  rejectionReason?: string;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  aadhar: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  income: { type: Number, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  status: { type: String, default: 'Pending' },
  subsidyAmount: { type: Number, default: 0 },
  officerName: { type: String },
  connectionDate: { type: String },
  rejectionReason: { type: String }
});

export default mongoose.model<IUser>('User', UserSchema);
