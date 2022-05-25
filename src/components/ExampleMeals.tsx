import styled from "styled-components";
import { CircularProgress } from "@mui/material";
import { StatusType, useQuery } from "./useQuery";
import { useCartItems } from "../utils/store";

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

  return (
    <ExampleMealsStyles>
      {status === "loading" ? (
        <CircularProgress />
      ) : (
        <div className="ExampleMeals">
          {menuItems &&
            menuItems
              .slice(0, 3)
              .map(({ id, title }) => (
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
    const newCartItem = { title: title };

    const newCartItems = [...cartItems, newCartItem];
    setCartItems(newCartItems);
    // setCartItems((prevState)=>[...prevState,newCartItem]);
  }
  return (
    <>
      <img src={`https://picsum.photos/${id}/100`} alt="" />
      <div>{title}</div>
      <div>Mixed Vegetables</div>
      <button onClick={addToCart}>➕</button>
    </>
  );
}

const ExampleMealsStyles = styled.div`
  .ExampleMeals {
    display: flex;
    flex-wrap: wrap;
    align-content: stretch;
    align-items: flex-end;
  }
`;
