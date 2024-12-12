'use client';

import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { updateUserInfo } from '@/actions/update-user-info';

import { signOut } from 'next-auth/react';

import { FormSignUpValues, formSignUpSchema } from '@/components/zod';
import { User } from '@prisma/client';

import toast from 'react-hot-toast';
import { Container, Title  } from '@/components/layout';
import { CustomInput } from '@/components/form-components';
import { Button } from '@/components/ui';

type ProfileFormProps = {
  data: User;
};

export const ProfileForm = ({ data }: ProfileFormProps) => {

  const form = useForm({
    resolver: zodResolver(formSignUpSchema),
    defaultValues: {
      fullName: data.fullName as string,
      email: data.email,
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: FormSignUpValues) => {
    try {
      await updateUserInfo({
        email: data.email,
        fullName: data.fullName,
        password: data.password,
      });

      toast.error('Data updated', {
        icon: '✅',
      });
    } catch (error) {
      return toast.error('Data update error', {
        icon: '❌',
      });
    }
  };

  const onClickSignOut = () => {
    signOut({
      callbackUrl: '/',
    });
  };

  return (
    <Container className="my-10">
      <Title text={`Personal Data | #${data.id}`} size="md" className="font-bold" />

      <FormProvider {...form}>
        <form className="mt-10 w-96 flex flex-col gap-5" onSubmit={form.handleSubmit(onSubmit)}>
          <CustomInput name="email" label="E-Mail" required />
          <CustomInput name="fullName" label="Full Name" required />

          <CustomInput type="password" name="password" label="New Password" required />
          <CustomInput type="password" name="confirmPassword" label="Retype Password" required />

          <Button disabled={form.formState.isSubmitting} className="mt-10 text-base" type="submit">
            Save
          </Button>

          <Button
            onClick={onClickSignOut}
            variant="secondary"
            disabled={form.formState.isSubmitting}
            className="text-base"
            type="button"
          >
            Sign Out
          </Button>
        </form>
      </FormProvider>
    </Container>
  );
};