import { fetchThreadById } from '@/actions/thread.action';
import { fetchUser } from '@/actions/user.action';
import { ThreadCard } from '@/components';
import { CommentForm } from '@/container';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export const revalidate = 0;

export default async function ThreadPage({
  params,
}: {
  params: { id: string };
}) {
  if (!params.id) return null;

  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect('/onboarding');

  const thread = await fetchThreadById(params.id);

  return (
    <section className="relative">
      <div>
        <ThreadCard threadcard={thread} />
      </div>

      <div className="mt-7">
        <CommentForm
          threadId={params.id}
          currentUserImg={user.imageUrl}
          currentUserId={JSON.stringify(userInfo._id)}
        />
      </div>

      <div className="mt-10">
        {thread.children.map((childItem: any) => (
          <ThreadCard key={childItem._id} threadcard={childItem} />
        ))}
      </div>
    </section>
  );
}
