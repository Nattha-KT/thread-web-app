import { UseFormReturn } from 'react-hook-form';
import * as z from 'zod';

export const getCommentFormSchema = z.object({
  thread: z.string().min(3, { message: 'Minimum 3 characters.' }),
});

export type CommentFormSchema = UseFormReturn<
  z.infer<typeof getCommentFormSchema>
>;
export type CommentFormValues = z.infer<typeof getCommentFormSchema>;
