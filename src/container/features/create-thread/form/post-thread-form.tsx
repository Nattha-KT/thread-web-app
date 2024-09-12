'use client';

import { useOrganization } from '@clerk/nextjs';
import { usePathname, useRouter } from 'next/navigation';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

// import { ThreadValidation } from '@/lib/validations/thread';
// import { createThread } from '@/lib/actions/thread.actions';
import { usePostThreadForm } from '../hooks';
import { PostThreadFormValues } from '../schema';
import { createThread } from '@/actions/thread.action';

export function PostThread({ userId }: { userId: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const { organization } = useOrganization();

  const { form } = usePostThreadForm(userId);

  const onSubmit = async (values: PostThreadFormValues) => {
    await createThread({
      text: values.thread,
      author: userId,
      communityId: organization ? organization.id : null,
      path: pathname,
    });

    router.push('/');
  };

  return (
    <Form {...form}>
      <form
        className="mt-10 flex flex-col justify-start gap-10"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="thread"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="text-base-semibold">Content</FormLabel>
              <FormControl className="no-focus border border-dark-4 bg-dark-3 text-base-regular">
                <Textarea rows={12} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="bg-primary-500 text-base-semibold">
          Post Thread
        </Button>
      </form>
    </Form>
  );
}
