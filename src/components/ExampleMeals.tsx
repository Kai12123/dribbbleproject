import styled from "styled-components";
import { CircularProgress } from "@mui/material";
import { StatusType, useQuery } from "./useQuery";
import { CartItemType, useCartItems } from "../utils/store";
import { useState } from "react";

const EXAMPLE_POST = {
  userId: 1,
  id: 1,
  title:
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
};

type DataType = typeof EXAMPLE_POST;

// TODO for next time...
// work on the CartPage
// - plenty of html/css if you like
// react learning - Kent C Dodds - React for Beginners
// react practice...
// practice using useQuery + .map to render lists in different components
// Javascript30 https://www.youtube.com/watch?v=VuN8qwZoego&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH
export function ExampleMeals({}) {
  const { data: menuItems, status } = useQuery(
    "https://jsonplaceholder.typicode.com/posts"
  ) as unknown as { data: DataType[]; status: StatusType };
  const menuItemsCleaned =
    menuItems && menuItems.slice(0, 3).map((item) => ({ ...item }));

  return (
    <ExampleMealsStyles>
      {status === "loading" ? (
        <CircularProgress />
      ) : (
        <div className="ExampleMeals">
          {menuItemsCleaned.map(({ id, title }) => (
            <MenuItem title={title} id={id} key={id} />
          ))}
        </div>
      )}
    </ExampleMealsStyles>
  );
}
type MenuItemProps = { title: string; id: number };

function MenuItem({ title, id }: MenuItemProps) {
  const [cartItems, setCartItems] = useCartItems();

  function addToCart() {
    // TODO what do we want to happen instead
    const newCartItem: CartItemType = {
      quantity: 1,
      title: title,
      price: randUpTo(200),
      imgUrl: "https://picsum.photos/100/100",
    };

    // item is already in cart if cartItems includes one with the same title
    const isItemAlreadyInCart = cartItems.find((item) => item.title === title);

    const newCartItems = isItemAlreadyInCart
      ? // just update the quanity of that one
        cartItems.map((item) => {
          // if this is the matching cart item, add 1 to its quantity
          if (item.title === title) {
            return { ...item, quantity: item.quantity + 1 };
          }
          // otherwise, leave it alone
          return item;
        })
      : // add it to the end of the array
        [...cartItems, newCartItem];
    setCartItems(newCartItems);

    // setCartItems((prevState)=>[...prevState,newCartItem]);
  }

  return (
    <MenuItemStyles>
      <img src={`https://picsum.photos/${id}/100`} alt="" />
      <div>{title}</div>
      <div>Mixed Vegetables</div>
      <button onClick={addToCart}>➕</button>
    </MenuItemStyles>
  );
}

function randUpTo(max) {
  return Math.ceil(Math.random() * max);
}

const MenuItemStyles = styled.div``;
const ExampleMealsStyles = styled.div`
  .ExampleMeals {
    display: flex;
    flex-wrap: wrap;
    align-content: stretch;
    align-items: flex-end;
  }
`;
