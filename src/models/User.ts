import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password?: string;
  role: "User" | "Client" | "Admin";
  image?: string;
  provider: "credentials" | "google" | "github";
  createdAt: Date;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, select: false },
  role: { type: String, enum: ["User", "Client", "Admin"], default: "User" },
  image: { type: String },
  provider: { type: String, enum: ["credentials", "google", "github"], default: "credentials" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
