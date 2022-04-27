import { Home, Info, MenuBook, ShoppingCart } from "@mui/icons-material";
import styled from "styled-components";

export function AppBar({}) {
  return (
    <AppBarStyles>
      <div className="AppBar">
        <div className="AppBarItem">
          <Home />
        </div>
        <div className="AppBarItem">
          <Info />
        </div>
        <div className="AppBarItem">
          <MenuBook />
        </div>
        <div className="AppBarItem">
          <ShoppingCart />
        </div>
      </div>
    </AppBarStyles>
  );
}
const AppBarStyles = styled.div`
  .AppBar {
    position: fixed;
    bottom: 12px;
    left: 0;
    right: 0;
    background-color: black;
    display: flex;
    border-radius: 9999px;
    justify-content: space-around;
    box-shadow: 0px 3px 14px #00000099;
    padding: 6px;
    margin: 0 12px;
  }
  .AppBarItem {
  }
  svg {
    color: white;
  }
`;
