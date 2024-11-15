'use client';

import {ReactNode, useState} from 'react';
import Link from 'next/link';
import { useCart } from '@/hooks';
import { getCartItemDetails } from '@/lib';
import { CartDrawerItem } from '@/components/shared';


import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';


import { Title } from '@/components/layout';
import { Button } from '@/components/ui';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { Ingredient } from '@prisma/client';
import { PizzaSize, PizzaType } from '@/prisma/prisma-types';
import Image from 'next/image';
import { cn } from '@/lib';



export let CartDrawer = ({ children }: {children: ReactNode}) => {

  let {items, totalAmount, updateCartItemQuantity, removeCartItem } = useCart();
  
  let [redirecting, setRedirecting] = useState(false);

  let onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
    let newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
    updateCartItemQuantity(id, newQuantity);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>

      <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
        <div className={cn('flex flex-col h-full', !totalAmount && 'justify-center')}>
          {totalAmount > 0 && (
            <SheetHeader>
              <SheetTitle>
                You've choosen: <span className="font-bold">{items.length} product(s)</span>
              </SheetTitle>
            </SheetHeader>
          )}

          {!totalAmount && (
            <div className="flex flex-col items-center justify-center w-72 mx-auto">
              <Image src="/images/cart/empty-box.png" alt="Empty cart" width={120} height={120} />
              <Title size="sm" text="The Cart is empty" className="text-center font-bold my-2" />
              <p className="text-center text-neutral-500 mb-5">
                Add at least one pizza to complete your order
              </p>

              <SheetClose>
                <Button className="w-56 h-12 text-base" size="lg">
                  <ArrowLeft className="w-5 mr-2" />
                  Go back
                </Button>
              </SheetClose>
            </div>
          )}

          {totalAmount > 0 && (
            <>
              <div className="-mx-6 mt-5 overflow-auto flex-1">
                {items.map(item => (
                  <div key={item.id} className="mb-2">
                    <CartDrawerItem
                      id={item.id}
                      name={item.name}
                      imageUrl={item.imageUrl}
                      details={getCartItemDetails(
                        item.pizzaSize as PizzaSize,
                        item.pizzaType as PizzaType,
                        item.ingredients as Ingredient[],
                      )}
                      price={item.price}
                      quantity={item.quantity}
                      disabled={item.disabled}
                      onClickCountButton={type =>
                        onClickCountButton(item.id, item.quantity, type)
                      }
                      onClickRemove={() => removeCartItem(item.id)}
                    />
                  </div>
                ))}
              </div>

              <SheetFooter className="-mx-6 bg-white p-8">
                <footer className="w-full">
                  <div className="flex mb-4">
                    <span className="flex flex-1 text-lg text-neutral-500">
                      Total:
                      <div className="flex-1 border-b border-dotted border-b-neutral-200 relative -top-1 mx-2" />
                    </span>

                    <span className="font-semibold text-lg">&#8364;{totalAmount}</span>
                  </div>

                  <Link href="/checkout">
                    <Button
                      onClick={() => setRedirecting(true)}
                      loading={redirecting}
                      type="submit"
                      className="w-full h-12 font-semibold text-lg text-brand bg-white border border-brand hover:bg-brand hover:text-white"
                    >
                      Checkout
                      <ArrowRight className="w-5 ml-2" />
                    </Button>
                  </Link>
                </footer>
              </SheetFooter>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};