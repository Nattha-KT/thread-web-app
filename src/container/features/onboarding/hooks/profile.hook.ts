'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { getProfileUserFormSCheme, ProfileUserFormValues } from '../schema';
import { TAccountUser } from '@/types';

const defaultPorfileUserFormValue = {} satisfies Partial<ProfileUserFormValues>;

export const useProfileForm = (user: TAccountUser) => {
  const profileForm = useForm<z.infer<typeof getProfileUserFormSCheme>>({
    resolver: zodResolver(getProfileUserFormSCheme),
    defaultValues:
      {
        profile_photo: user?.image ? user.image : '',
        name: user?.name ? user.name : '',
        username: user?.username ? user.username : '',
        bio: user?.bio ? user.bio : '',
      } ?? defaultPorfileUserFormValue,
  });

  return {
    profileForm,
  };
};
