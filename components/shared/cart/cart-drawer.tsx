import { ReactNode } from "react";
import Image from 'next/image';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Button,
} from '@/components/ui';

import { cn } from '@/lib/';
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CartDrawerProps = {
  children: ReactNode;
};


export const CartDrawer = ({ children }: CartDrawerProps) => {
  // const { totalAmount, updateItemQuantity, items, removeCartItem } = useCart();
  // const [redirecting, setRedirecting] = React.useState(false);

  // const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
  //   const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
  //   updateItemQuantity(id, newQuantity);
  // };

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>

      <SheetContent className="pb-0 w-[350px] flex flex-col justify-between bg-[#f7f7f9]">
        <SheetHeader>
          <SheetTitle>
            In the cart <span className="font-bold">3 goods</span>
          </SheetTitle>
        </SheetHeader>

        <SheetFooter className="-mx-6 p-8 bg-white">
          <div className="w-full">
            <div className="mb-4 flex">
              <div className="flex-1 flex text-lg text-neutral-500">
                Total:
              </div>

              <span className="font-bold text-lg">&#8364;100</span>
            </div>

          <Link href="/checkout">
            <Button
              type="submit"
              className="w-full h-12 text-md font-bold text-brand border border-brand bg-white hover:bg-brand hover:text-white"
              onClick={ () => {} }
              // loading={}
            >
              Checkout
              <ArrowRight className="ml-2 w-5" />
            </Button>
          </Link>
          </div>
        </SheetFooter>

        {/* <div className={cn('flex flex-col h-full', !totalAmount && 'justify-center')}>
          {totalAmount > 0 && (
            <SheetHeader>
              <SheetTitle>
                В корзине <span className="font-bold">{items.length} товара</span>
              </SheetTitle>
            </SheetHeader>
          )}

          <SheetHeader>
              <SheetTitle>
                В корзине <span className="font-bold">{items.length} товара</span>
              </SheetTitle>
            </SheetHeader>

          {!totalAmount && (
            <div className="flex flex-col items-center justify-center w-72 mx-auto">
              <Image src="/assets/images/empty-box.png" alt="Empty cart" width={120} height={120} />
              <Title size="sm" text="Корзина пустая" className="text-center font-bold my-2" />
              <p className="text-center text-neutral-500 mb-5">
                Добавьте хотя бы одну пиццу, чтобы совершить заказ
              </p>

              <SheetClose>
                <Button className="w-56 h-12 text-base" size="lg">
                  <ArrowLeft className="w-5 mr-2" />
                  Вернуться назад
                </Button>
              </SheetClose>
            </div>
          )}

          {totalAmount > 0 && (
            <>
              <div className="mt-5 -mx-6 flex-1 overflow-auto">
                {items.map((item) => (
                  <div key={item.id} className="mb-2">
                    <CartDrawerItem
                      id={item.id}
                      name={item.name}
                      imageUrl={item.imageUrl}
                      price={item.price}
                      quantity={item.quantity}
                      details={getCartItemDetails(
                        item.ingredients,
                        item.pizzaType as PizzaType,
                        item.pizzaSize as PizzaSize,
                      )}
                      disabled={item.disabled}
                      onClickCountButton={(type) =>
                        onClickCountButton(item.id, item.quantity, type)
                      }
                      onClickRemove={() => removeCartItem(item.id)}
                    />
                  </div>
                ))}
              </div> */}

              {/* <SheetFooter className="-mx-6 bg-white p-8">
                <div className="w-full">
                  <div className="flex mb-4">
                    <span className="flex flex-1 text-lg text-neutral-500">
                      Итого
                      <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
                    </span>

                    <span className="font-bold text-lg">{totalAmount} ₽</span>
                  </div>

                  <Link href="/checkout">
                    <Button
                      onClick={() => setRedirecting(true)}
                      loading={redirecting}
                      type="submit"
                      className="w-full h-12 text-base">
                      Оформить заказ
                      <ArrowRight className="w-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </SheetFooter>
            </>
          )}
        </div> */}
      </SheetContent>
    </Sheet>
  );
};