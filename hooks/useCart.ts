import { useEffect} from 'react';
import { useCartStore } from '@/store/cart-store';
import { CreateCartItemValues } from '@/utils/cart.dto';
import { CartItemState } from '@/lib/getCartDetails';

type ReturnProps = {
  items: CartItemState[];
  totalAmount: number;
  loading: boolean;
  updateCartItemQuantity: (id: number, quantity: number) => void;
  addCartItem: (values: CreateCartItemValues) => void;
  removeCartItem: (id: number) => void;
};

export const useCart = (): ReturnProps => {
  let cartState = useCartStore(state => state);

  useEffect(() => {
    cartState.fetchCartItems();
  }, []);
  console.log('cartState: ', cartState);
  return cartState;
};