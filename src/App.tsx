import { ActionIcon, Burger } from "@mantine/core";
import styled from "styled-components";
import { SearchRounded } from "@mui/icons-material";
import { ChipsFilterBar } from "./components/ChipsFilterBar";
import { HeroProduct } from "./components/HeroProduct";
import { AppBar } from "./components/AppBar";

function App() {
  return (
    <AppStyles className="App">
      <NavBar />
      <PageTitle />
      <ChipsFilterBar />
      <HeroProduct /> <div className="ProductPreview"></div>
      <ExampleMeals />
      <AppBar />
    </AppStyles>
  );
}
const AppStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  min-height: 100vh;
`;

// https://mantine.dev/core/action-icon/
export default App;

function NavBar({}) {
  return (
    <NavBarStyles className="nav">
      <Burger opened={true} />
      <ActionIcon>
        <SearchRounded />
      </ActionIcon>
    </NavBarStyles>
  );
}
const NavBarStyles = styled.div`
  display: flex;
`;

function PageTitle({}) {
  return (
    <PageTitleStyles>
      <div className="PageTitle">Delicious Salads</div>
      <div className="PageTite">We make fresh and healthy food</div>
    </PageTitleStyles>
  );
}
const PageTitleStyles = styled.div``;
function ExampleMeals({}) {
  return (
    <ExampleMealsStyles>
      <div className="ExampleMeals">
        <img src="https://picsum.photos/100/100" alt="" />
        <div>Mixed Salad</div>
        <div>Mixed Vegetables</div>
        <button>➕</button>
        <div>Quinoa Salad</div>
        <div>Spicy with garlic</div>
        <button>➕</button>
        <img src="https://picsum.photos/100/100" alt="" />
      </div>
    </ExampleMealsStyles>
  );
}

const ExampleMealsStyles = styled.div`
  .ExampleMeals {
    display: flex;
    align-content: stretch;
    align-items: flex-end;
  }
`;
