'use client';

import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormSignUpValues, formSignUpSchema } from '@/components/zod';

import { registerUser } from '@/actions/register_user';

import toast from 'react-hot-toast';
import { CustomInput } from '@/components/form-components';
import { Button } from '@/components/ui';

type SignUpFormProps = {
  onClose?: VoidFunction;
  onClickLogin?: VoidFunction;
};

export const SignUpForm = ({ onClose, onClickLogin }: SignUpFormProps) => {

  const form = useForm<FormSignUpValues>({
    resolver: zodResolver(formSignUpSchema),
    defaultValues: {
      email: '',
      fullName: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: FormSignUpValues) => {
    try {
      await registerUser({
        email: data.email,
        fullName: data.fullName,
        password: data.password,
      });

      toast.error('Sign up successfully. Check your email box to verify your account', {
        icon: '✅',
      });

      onClose?.();
    } catch (error) {
      return toast.error('Not correct email or password', {
        icon: '❌',
      });
    }
  };

  return (
    <FormProvider {...form}>
      <form className="flex flex-col gap-5" onSubmit={form.handleSubmit(onSubmit)}>
        <CustomInput name="email" label="E-Mail" required />
        <CustomInput name="fullName" label="Full name" required />
        <CustomInput name="password" label="Password" type="password" required />
        <CustomInput name="confirmPassword" label="Confirm password" type="password" required />

        <Button loading={form.formState.isSubmitting} className="h-12 text-base" type="submit">
          Sign Up
        </Button>
      </form>
    </FormProvider>
  );
};