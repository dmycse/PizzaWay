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
  deleteCartItem: (id: number) => void;
};

/**
 * useCart
 *
 * This hook returns the cart state from the cart store. When the component
 * mounts, it fetches the cart items from the server.
 *
 * @returns Cart state, containing the items, total amount, loading state,
 * and functions for updating the cart item quantity, adding a new item,
 * and removing an item.
 */
export const useCart = (): ReturnProps => {
  let cartState = useCartStore(state => state);

  useEffect(() => {
    cartState.fetchCartItems();
  }, []);

  return cartState;
};