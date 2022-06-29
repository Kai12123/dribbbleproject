import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { SetStateAction } from "react";

const cartItemsAtom = atomWithStorage("cartItemsAtom", []);
export type CartItemType = {
  quantity: number;
  title: string;
  price: number;
  imgUrl: string;
};

export function useCartItems(): [
  CartItemType[],
  (update: SetStateAction<CartItemType[]>) => void
] {
  const [cartItems, setCartItems] = useAtom<CartItemType[]>(cartItemsAtom);
  return [cartItems, setCartItems];
}
