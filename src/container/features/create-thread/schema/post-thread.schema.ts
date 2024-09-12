import { UseFormReturn } from 'react-hook-form';
import * as z from 'zod';

export const getPostThreadFormSchema = z.object({
  thread: z.string().min(3, { message: 'Minimum 3 characters.' }),
  accountId: z.string(),
});

export const CommentValidation = z.object({
  thread: z.string().min(3, { message: 'Minimum 3 characters.' }),
});

export type PostThreadFormSchema = UseFormReturn<
  z.infer<typeof getPostThreadFormSchema>
>;

export type PostThreadFormValues = z.infer<typeof getPostThreadFormSchema>;
