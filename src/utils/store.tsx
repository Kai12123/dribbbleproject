import { atom, useAtom } from "jotai";
import { SetStateAction } from "react";
const cartItemsAtom = atom([]);
type CartItemType = { title: string };
export function useCartItems(): [
  CartItemType[],
  (update: SetStateAction<CartItemType[]>) => void
] {
  const [cartItems, setCartItems] = useAtom<CartItemType[]>(cartItemsAtom);
  return [cartItems, setCartItems];
}
