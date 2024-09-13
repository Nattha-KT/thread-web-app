import { fetchUser } from '@/actions/user.action';
import { PostThread } from '@/container';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function CreateThreadPage() {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect('/onboarding');

  return (
    <h1 className="head-text">
      Create Thread
      <PostThread userId={userInfo._id.toString()} />
    </h1>
  );
}
