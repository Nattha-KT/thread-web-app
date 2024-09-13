'use client';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
} from '@/components';
import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { CommentFormValues } from '../schema';
import { useComment } from '../hook';
import { addCommentToThread } from '@/actions/comment.action';

type CommentProps = {
  threadId: string;
  currentUserImg: string;
  currentUserId: string;
};

export function CommentForm({
  threadId,
  currentUserImg,
  currentUserId,
}: CommentProps) {
  const pathname = usePathname();
  const { form } = useComment();

  const onSubmit = async (values: CommentFormValues) => {
    await addCommentToThread(
      threadId,
      values.thread,
      JSON.parse(currentUserId),
      pathname,
    );

    form.reset();
  };

  return (
    <Form {...form}>
      <form className="comment-form" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="thread"
          render={({ field }) => (
            <FormItem className="flex w-full items-center gap-3">
              <FormLabel>
                <Image
                  src={currentUserImg}
                  alt="current_user"
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
              </FormLabel>
              <FormControl className="border-none bg-transparent">
                <Input
                  type="text"
                  {...field}
                  placeholder="Comment..."
                  className="no-focus text-light-1 outline-none"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit" className="comment-form_btn">
          Reply
        </Button>
      </form>
    </Form>
  );
}
