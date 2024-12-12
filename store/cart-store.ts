import { create } from 'zustand';
import { getCart, updateItemQuantity, addCartItem, removeCartItem } from '@/utils/cart';
import { getCartDetails } from '@/lib';
import  type { CartItemState } from '@/lib/getCartDetails'
import { CreateCartItemValues } from '@/utils/cart.dto';

export type CartState = {
  items: CartItemState[];
  totalAmount: number;
  loading: boolean;
  error: boolean;

  /* Getting CartItems from the cart */
  fetchCartItems: () => Promise<void>;

  /* Request for update of the quantity of the CartItem in the cart */
  updateCartItemQuantity: (id: number, quantity: number) => Promise<void>;

  /* Request for adding CartItem to the cart */
  addCartItem: (values: CreateCartItemValues) => Promise<void>;
  
  /* Request for removing CartItem from the cart */
  deleteCartItem: (id: number) => Promise<void>;
};

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  totalAmount: 0,
  error: false,
  loading: true,

  /**
   * Fetches the cart items from the server.
   * Sets the loading state to true on start and false on finish.
   * Sets the error state to true if an error occurs.
   * Sets the items and totalAmount state with the returned data.
   */
  fetchCartItems: async () => {
    try {
      set({ loading: true, error: false });
      const data = await getCart();
      set(getCartDetails(data));
    } catch (error) {
        console.error(error);
        set({ error: true });
    } finally {
        set({ loading: false });
    }
  },

  updateCartItemQuantity: async (id: number, quantity: number) => {
    try {
      set({ loading: true, error: false });
      const data = await updateItemQuantity(id, quantity);
      set(getCartDetails(data));
    } catch (error) {
        console.error(error);
        set({ error: true });
    } finally {
        set({ loading: false });
    }
  },

  addCartItem: async (values: CreateCartItemValues) => {
    try {
      set({ loading: true, error: false });
      const data = await addCartItem(values);
      set(getCartDetails(data));
    } catch (error) {
        console.error(error);
        set({ error: true });
    } finally {
        set({ loading: false });
    }
  },

  deleteCartItem: async (id: number) => {
    try {
      set(state => ({
        loading: true,
        error: false,
        items: state.items.map(item => (item.id === id ? { ...item, disabled: true } : item)),
      }));
      const data = await removeCartItem(id);
      set(getCartDetails(data));
    } catch (error) {
        console.error(error);
        set({ error: true });
    } finally {
        set((state) => ({
          loading: false,
          items: state.items.map(item => ({ ...item, disabled: false })),
        }));
    }
  }

}));