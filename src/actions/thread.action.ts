'use server';

import { connectToMongoDB } from '@/db/connectDB';
import { Community, Thread, User } from '@/model';
import { revalidatePath } from 'next/cache';

type CreateThreadProps = {
  text: string;
  author: string;
  communityId: string | null;
  path: string;
};

export async function createThread({
  text,
  author,
  communityId,
  path,
}: CreateThreadProps) {
  try {
    connectToMongoDB();

    const communityIdObject = await Community.findOne(
      { id: communityId },
      { _id: 1 },
    );

    const createdThread = await Thread.create({
      text,
      author,
      community: communityIdObject, // Assign communityId if provided, or leave it null for personal account
    });

    // Update User model
    await User.findByIdAndUpdate(author, {
      $push: { threads: createdThread._id },
    });

    if (communityIdObject) {
      // Update Community model
      await Community.findByIdAndUpdate(communityIdObject, {
        $push: { threads: createdThread._id },
      });
    }

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to create thread: ${error.message}`);
  }
}
