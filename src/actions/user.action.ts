'use server';

import { connectToMongoDB } from '@/db/connectDB';
import { User } from '@/model';
import { TAccountUser } from '@/types';

export async function updateUser(user: TAccountUser) {
  connectToMongoDB();

  try {
    await User.findOneAndUpdate(
      { id: user.userId },
      {
        username: user.username.toLowerCase(),
        name: user.name,
        bio: user.bio,
        image: user.image,
        onboarded: true,
      },
      { upsert: true }, // Use upsert to insert if no existing record
    );
  } catch (error: any) {
    throw new Error(`Failed to create/update user: ${error.message}`);
  }
}

export async function fetchUser(userId: string) {
  try {
    connectToMongoDB();

    return await User.findOne({ id: userId });
    //// It similar to join in relationship
    // .populate({
    //   path: 'communities',
    //   model: 'Community',
    // });
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}
