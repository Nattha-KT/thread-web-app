import { AccountProfile } from '@/container';
import { currentUser } from '@clerk/nextjs/server';
import React from 'react';

export default async function OnboardingPage() {
  const user = await currentUser();
  if (!user) return null; // to avoid typescript warnings

  // const userInfo = await fetchUser(user.id);
  // const userInfo = {};
  // if (userInfo?.onboarded) redirect('/');

  const userData = {
    id: user.id,
    objectId: {},
    username: user.username ?? '',
    name: user.firstName ?? '',
    bio: '',
    // image: userInfo ? userInfo?.image : user.imageUrl,
    image: user.imageUrl,
  };

  return (
    <main className="mx-auto flex max-w-3xl flex-col items-start px-10 py-20">
      <h1 className="head-text">Onboarding</h1>
      <p className="mt-3 text-base-regular text-light-2">
        Complete your profile now to use Threads
      </p>

      <section className="mt-9 rounded-md bg-dark-2 p-10">
        <AccountProfile user={userData} btnTitle="Continue" />
      </section>
    </main>
  );
}
