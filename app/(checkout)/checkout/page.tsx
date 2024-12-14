'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { createOrder } from '@/actions/create_order';
import { useCart } from '@/hooks';

import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckoutFormValues, checkoutFormSchema } from '@/components/zod/checkout-form-schema';

import { getMyData } from '@/lib';

import { Container, Title } from '@/components/layout';
import { CheckoutCart, CheckoutPersonalData, CheckoutAddressData, CheckoutSummary } from '@/components/shared/checkout';

import toast from 'react-hot-toast';

export default function CheckoutPage() {

  const [submitting, setSubmitting] = useState(false);

  const { totalAmount, loading, items, updateCartItemQuantity,  deleteCartItem } = useCart();

  const { data: session } = useSession();

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      email: '',
      firstName: '',
      surName: '',
      phone: '',
      address: '',
      comment: '',
    },
  });

  useEffect(() => {
    async function fetchUserInfo() {
      const data = await getMyData();
      const [firstName, surName] = data.fullName!.split(' ');

      form.setValue('firstName', firstName);
      form.setValue('surName', surName);
      form.setValue('email', data.email);
    }

    if (session) {
      fetchUserInfo();
    }
  }, [session]);

  const onSubmit = async (data: CheckoutFormValues) => {
    console.log('data', data)
    try {
      setSubmitting(true);

      const url = await createOrder(data);

      toast.success('The order has been created! Pay now ... ', {
        icon: '✅',
      });
      console.log('URL', url);
      if (url) {
        location.href = url;
      }
    } catch (err) {
      console.log(err);
      setSubmitting(false);
      toast.error('The order has not been created!', {
        icon: '❌',
      });
    }
  };

  const onClickCountButton = (id: number, quantity: number, role: 'plus' | 'minus') => {
    const newQuantity = role === 'plus' ? quantity + 1 : quantity - 1;
    updateCartItemQuantity(id, newQuantity);
  };

  return (
    <Container className="mt-10">
      <Title text="Checkout" className="font-extrabold mb-8 text-[36px]" />

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-10">
            {/* left side */}
            <div className="mb-20 flex-1 flex flex-col gap-10">
              <CheckoutCart
                onClickCountButton={onClickCountButton}
                removeCartItem={deleteCartItem}
                items={items}
                loading={loading}
              />

              <CheckoutPersonalData className={loading ? 'opacity-40 pointer-events-none' : ''} />

              <CheckoutAddressData className={loading ? 'opacity-40 pointer-events-none' : ''} />
            </div>

            {/* right side */}
            <div className="w-[450px]">
              <CheckoutSummary totalAmount={totalAmount} loading={loading || submitting} />
            </div>
          </div>
        </form>
      </FormProvider>
    </Container>
  );
}