'use clint';
import { useForm } from 'react-hook-form';
import { CommentFormValues, getCommentFormSchema } from '../schema';
import { zodResolver } from '@hookform/resolvers/zod';

export function useComment() {
  const form = useForm<CommentFormValues>({
    resolver: zodResolver(getCommentFormSchema),
    defaultValues: {
      thread: '',
    },
  });
  return {
    form,
  };
}
