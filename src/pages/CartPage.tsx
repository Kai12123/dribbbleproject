// import { CastForEducationTwoTone } from "@mui/icons-material";
import { useCartItems } from "../utils/store";
import styled from "styled-components";
import { CartItemType } from "../utils/store";
import { Close } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";

// const myCat = {
//   filter: (getShouldKeepThisItem) => {
//     const myCatArr = [1, 2, 3];
//     console.log("filtered");
//     // does some stuff
//     for (let index = 0; index < myCatArr.length; index++) {
//       const item = myCatArr[index];
//       const shouldKeep = getShouldKeepThisItem(item, index, myCatArr);
//     }

//     // do the filter
//     return myCatArr;
//   },
// };

// myCat.filter(123);

const handleDeleteItem = (
  idxToDelete: number,
  cartItems: CartItemType[],
  setCartItems: (update: React.SetStateAction<CartItemType[]>) => void
) => {
  console.log(
    "🚀 ~ file: CartPage.tsx ~ line 9 ~ handleDeleteItem ~ idxToDelete",
    idxToDelete
  );

  // to delete an item from a list, we "filter it out"
  const filteredCartItems = cartItems.filter((_, idx) => {
    console.log(
      "🚀 ~ file: CartPage.tsx ~ line 13 ~ filteredCartItems ~ idx",
      idx
    );
    const keep = idxToDelete !== idx;
    return keep;
  });

  // then the list should no longer have that item in it
  console.log(
    "🚀 ~ file: CartPage.tsx ~ line 13 ~ filteredCartItems ~ filteredCartItems",
    filteredCartItems
  );
  setCartItems(filteredCartItems);
};
export function CartPage({}) {
  // map each cartItem in cartItems into a <CartItem/> component
  const [cartItems, setCartItems] = useCartItems();

  return (
    <>
      <div className="cartItemsContainer">
        {cartItems.length === 0 ? (
          <EmptyCartPlaceholder />
        ) : (
          cartItems.map((cartItem, idx) => {
            // this function should ONLY delete THIS cart item
            const handleDeleteThisItem = () => {
              handleDeleteItem(idx, cartItems, setCartItems);
            };
            return (
              <CartItem
                {...cartItem}
                handleDeleteThisItem={handleDeleteThisItem}
                key={cartItem.title}
              />
            );
          })
        )}
      </div>
    </>
  );
}

function EmptyCartPlaceholder() {
  return <div>Your cart is empty</div>;
}

function CartItem({
  title,
  imgUrl,
  price,
  handleDeleteThisItem,
  quantity,
}: CartItemType & { handleDeleteThisItem: () => void }) {
  // TODO item quantity input <TextField/>
  return (
    <CartItemStyles className="CartItemStyles">
      <div className="left">
        <img src={imgUrl} alt="" />
      </div>
      <div className="right">
        <div className="row">{title}</div>
        <div className="row">{price}</div>
        <div className="row">
          <MetaDataItems
            quantity={quantity}
            // ¨TODO
            setQuantity={(newValue: number) => {
              return;
            }}
          />
        </div>
        <IconButton className="btnClose" onClick={() => handleDeleteThisItem()}>
          <Close />
        </IconButton>
      </div>
    </CartItemStyles>
  );
}
function MetaDataItems({
  quantity,
  setQuantity,
}: {
  quantity: number;
  setQuantity: (newValue: number) => void;
}) {
  return (
    <div className="quantity">
      <TextField value={quantity} label="Quantity" type="number" size="small" />
    </div>
  );
}
// TODO: CSS to make each item look like https://ecommerceguide.com/wp-content/uploads/2020/06/images-cart.png
const CartItemStyles = styled.div`
  border-top: 1px solid grey;
  .quantity {
  }
`;
