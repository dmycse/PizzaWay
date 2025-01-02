'use client';

import { FormProvider, useForm } from 'react-hook-form';
import { FormLoginValues, formLoginSchema } from '@/components/zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { signIn } from 'next-auth/react';

import toast from 'react-hot-toast';
import { Title } from '@/components/shared';
import { Button } from '@/components/ui';
import { CustomInput } from '@/components/form-components';

type LoginFormProps = {
  onClose?: VoidFunction;
};

/**
 * LoginForm renders a form for logging in.
 *
 * @example
 * <LoginForm onClose={() => console.log('Form closed')} />
 */
export const LoginForm = ({ onClose }: LoginFormProps) => {

  const form = useForm<FormLoginValues>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: FormLoginValues) => {

    try {
      const res = await signIn('credentials', {
        ...data,
        redirect: false,
      });

      if (!res?.ok) {
        throw Error();
      }

      toast.success('You have successfully logged in', {
        icon: '✅',
      });

      onClose?.();
    } catch (error) {
      console.error('Error [LOGIN]', error);
      toast.error('Error logging in', {
        icon: '❌',
      });
    }
  };

  return (
    <FormProvider {...form}>
      <form className="flex flex-col gap-5" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex justify-between items-center">
          <div className="mr-2">
            <Title text="Login" size="md" className="font-bold" />
            <p className="text-gray-400">Enter your email and password</p>
          </div>
          <img src="/images/products/pizzas/hero_pizza.webp" alt="pizza-icon" width={60} height={60} />
        </div>

        <CustomInput name="email" label="E-Mail" required />
        <CustomInput name="password" label="Password" type="password" required />

        <Button loading={form.formState.isSubmitting} className="h-12 text-primary text-lg bg-white border border-primary hover:text-white" type="submit">
          Sign in
        </Button>
      </form>
    </FormProvider>
  );
};
