import mongoose, { Document, ObjectId } from 'mongoose';

export interface TAccountUser {
  userId: string;
  username: string;
  name: string;
  bio: string;
  image: string;
  path: string;
}

// User Model Type
export interface IUser extends Document {
  id: string;
  username: string;
  name: string;
  image?: string;
  bio?: string;
  threads: mongoose.Types.ObjectId[]; // Reference to Thread model
  onboarded: boolean;
  communities: mongoose.Types.ObjectId[]; // Reference to Community model
}

// Community Model Type
export interface ICommunity extends Document {
  id: string;
  username: string;
  name: string;
  image?: string;
  bio?: string;
  createdBy: mongoose.Types.ObjectId; // Reference to User model
  threads: mongoose.Types.ObjectId[]; // Reference to Thread model
  members: mongoose.Types.ObjectId[]; // Reference to User model
}

// Thread Model Type
export interface IThread extends Document {
  text: string;
  author: ObjectId;
  community: ObjectId;
  createdAt: Date;
  parentId: string;
  children: ObjectId[]; // ใช้ ObjectId[] อย่างถูกต้อง
}
