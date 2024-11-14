import { create } from 'zustand';
import { getCart, updateCartItemQuantity, addCartItem, removeCartItem } from '@/utils/cart';
import { getCartDetails } from '@/lib';
import  type { CartItemState } from '@/lib/getCartDetails'
import { CreateCartItemValues } from '@/utils/cart.dto';

export type CartState = {
  loading: boolean;
  error: boolean;
  totalAmount: number;
  items: CartItemState[];

  /* Getting CartItems from the cart */
  fetchCartItems: () => Promise<void>;

  /* Request for update of the quantity of the CartItem in the cart */
  updateCartItemQuantity: (id: number, quantity: number) => Promise<void>;

  /* Request for adding CartItem to the cart */
  addCartItem: (values: CreateCartItemValues) => Promise<void>;
  
  /* Request for removing CartItem from the cart */
  removeCartItem: (id: number) => Promise<void>;
};

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  error: false,
  loading: true,
  totalAmount: 0,

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
      const data = await updateCartItemQuantity(id, quantity);
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

  removeCartItem: async (id: number) => {
    try {
      set((state) => ({
        loading: true,
        error: false,
        items: state.items.map((item) => (item.id === id ? { ...item, disabled: true } : item)),
      }));
      const data = await removeCartItem(id);
      set(getCartDetails(data));
    } catch (error) {
        console.error(error);
        set({ error: true });
    } finally {
        set((state) => ({
          loading: false,
          items: state.items.map((item) => ({ ...item, disabled: false })),
        }));
    }
  }

}));