'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { getPostThreadFormSchema } from '../schema';

export const usePostThreadForm = (userId: string) => {
  const form = useForm<z.infer<typeof getPostThreadFormSchema>>({
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
