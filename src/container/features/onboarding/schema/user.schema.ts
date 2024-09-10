import { UseFormReturn } from 'react-hook-form';
import * as z from 'zod';

export const getProfileUserFormSCheme = z.object({
  profile_photo: z.string().url().min(1),
  name: z
    .string()
    .min(3, { message: 'Minimum 3 characters.' })
    .max(30, { message: 'Maximum 30 caracters.' }),
  username: z
    .string()
    .min(3, { message: 'Minimum 3 characters.' })
    .max(30, { message: 'Maximum 30 caracters.' }),
  bio: z
    .string()
    .min(3, { message: 'Minimum 3 characters.' })
    .max(1000, { message: 'Maximum 1000 caracters.' }),
});

export type ProfileUserFormSchema = UseFormReturn<
  z.infer<typeof getProfileUserFormSCheme>
>;

export type ProfileUserFormValues = z.infer<typeof getProfileUserFormSCheme>;
