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

import { DialogTitle } from '@radix-ui/react-dialog';
import { Title } from '@/components/layout';
import { Button } from '@/components/ui';
import { ArrowLeft, ArrowRight, Loader } from 'lucide-react';

import { PizzaSize, PizzaType } from '@/prisma/prisma-types';
import Image from 'next/image';
import { cn } from '@/lib';

/**
 * A Sheet component that renders a cart drawer with the items in the cart,
 * allowing the user to update the quantity of each item and delete items.
 * 
 * This component is called from CartButton component -> /components/shared/cart/cart-button.tsx
 * 
 * @example
 * <CartDrawer>
 *   <CartDrawerTrigger asChild>
 *     <Button>Open Cart</Button>
 *   </CartDrawerTrigger>
 * </CartDrawer>
 */
export const CartDrawer = ({ children }: {children: ReactNode}) => {

  const {items, totalAmount, loading, updateCartItemQuantity, deleteCartItem } = useCart();
  
  const [redirecting, setRedirecting] = useState(false);

  const onClickCountButton = (id: number, quantity: number, role: 'plus' | 'minus') => {
    const newQuantity = role === 'plus' ? quantity + 1 : quantity - 1;
    updateCartItemQuantity(id, newQuantity);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>

      <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]" aria-describedby={undefined}>
        <DialogTitle className='hidden'/> 
        <div className={cn('flex flex-col h-full', !totalAmount && 'justify-center')}>
          {totalAmount > 0 && (
            <SheetHeader>
              <SheetTitle aria-describedby={undefined}>
                You have choosen: <span className="font-bold">{items.length} product(s)</span>
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

              <SheetClose className='w-full'>
                <span className="inline-flex justify-center items-center gap-2 w-56 h-12 text-brand text-2xl" >
                  <ArrowLeft className="w-5 mr-2" />
                  Go back
                </span>
              </SheetClose>
            </div>
          )}

          {totalAmount > 0 && (
            <>
              <div className="-mx-6 mt-5 overflow-auto flex-1">
                {items.map(item => (
                  <div key={item.id} className="mb-2">
                    <CartDrawerItem
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      imageUrl={item.imageUrl}
                      details={getCartItemDetails(
                        item.pizzaSize as PizzaSize,
                        item.pizzaType as PizzaType,
                        item.ingredients,
                      )}
                      price={item.price}
                      quantity={item.quantity}
                      disabled={item.disabled}
                      onClickCountButton={type =>
                        onClickCountButton(item.id, item.quantity, type)
                      }
                      onClickRemove={() => deleteCartItem(item.id)}
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
                    {loading
                      ? <Loader className="animate-spin" />
                      : <span className="font-semibold text-lg">&#8364;{totalAmount}</span>
                    }
                  </div>

                  <Link href="/checkout" className={cn({'pointer-events-none': redirecting || loading})}>
                    <Button
                      onClick={() => setRedirecting(true)}
                      loading={redirecting || loading}
                      type="submit"
                      // disabled={redirecting || loading}
                      className={cn('w-full h-12 font-semibold text-lg text-brand bg-white border border-brand hover:bg-brand hover:text-white',
                                {'opacity-50 disabled:bg-white': redirecting || loading})}
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