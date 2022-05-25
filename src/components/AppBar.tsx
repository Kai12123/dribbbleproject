import { Home, Info, MenuBook, ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCartItems } from "../utils/store";
/** buttons bar that appears bottom of the screen */
export function AppBar({}) {
  const [cartItems] = useCartItems();
  return (
    <AppBarStyles className="AppBar">
      <div className="AppBarItem">
        <Link to={"/"}>
          <Home />
        </Link>
      </div>
      <div className="AppBarItem">
        <Link to={"/about"}>
          <Info />
        </Link>
      </div>
      <div className="AppBarItem">
        <Link to={"/menu"}>
          <MenuBook />
        </Link>
      </div>
      <div className="AppBarItem">
        <Link to={"/cart"}>
          <Badge badgeContent={cartItems.length} color="primary">
            <ShoppingCart />
          </Badge>
        </Link>
      </div>
    </AppBarStyles>
  );
}

const APPBAR_HEIGHT = 40;
const AppBarStyles = styled.div`
  position: fixed;
  /* ? not sure why bottom isn't working on chrome mobile, can use top instead */
  /* bottom: 12px; */
  left: 0;
  right: 0;
  height: ${APPBAR_HEIGHT}px;
  box-sizing: border-box;
  top: calc(100vh - ${APPBAR_HEIGHT}px);
  background-color: black;
  display: flex;
  border-radius: 9999px;
  justify-content: space-around;
  box-shadow: 0px 3px 14px #00000099;
  padding: 6px;
  margin: 0 12px;
  .AppBarItem {
  }
  svg {
    color: white;
  }
`;
