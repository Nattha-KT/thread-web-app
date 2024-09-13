'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { getPostThreadFormSchema, PostThreadFormValues } from '../schema';

export const usePostThreadForm = (userId: string) => {
  const form = useForm<PostThreadFormValues>({
    resolver: zodResolver(getPostThreadFormSchema),
    defaultValues: {
      thread: '',
      accountId: userId,
    },
  });

  return {
    form,
  };
};
