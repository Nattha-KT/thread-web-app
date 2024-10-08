import { fetchPosts } from '@/actions/thread.action';
import { fetchUser } from '@/actions/user.action';
import { ThreadCard } from '@/components';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
// import { SignUpButton } from '@clerk/nextjs';
import React from 'react';

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect('/onboarding');

  const result = await fetchPosts(
    searchParams.page ? +searchParams.page : 1,
    30,
  );

  return (
    <>
      <h1 className="head-text text-left">Home</h1>

      <section className="mt-9 flex flex-col gap-10">
        {result.posts.length === 0 ? (
          <p className="no-result">No threads found</p>
        ) : (
          <>
            {result.posts.map((post) => (
              <ThreadCard threadcard={post} key={post._id} />
            ))}
          </>
        )}
      </section>

      {/* <Pagination
        path="/"
        pageNumber={searchParams?.page ? +searchParams.page : 1}
        isNext={result.isNext}
      /> */}
    </>
  );
}

// <SignUpButton mode="modal">
//   <button>Sign up</button>
// </SignUpButton>;
