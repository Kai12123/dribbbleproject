import { ActionIcon, Burger } from "@mantine/core";
import { Chip } from "@mantine/core";
import styled from "styled-components";
import { SearchRounded } from "@mui/icons-material";
import { ChipsFilterBar } from "./ChipsFilterBar";
import { HeroProduct } from "./HeroProduct";

function App() {
  return (
    <AppStyles className="App">
      <NavBar />
      <PageTitle />
      <ChipsFilterBar />
      <HeroProduct /> <div className="ProductPreview"></div>
      <AppBar />
    </AppStyles>
  );
}
const AppStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
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
  return <div className="PageTitle"></div>;
}
function ExampleMeals({}) {
  return (
    <ExampleMealsStyles>
      <img src="" alt="" className="ExampleMeals" />
      <div className="ExampleMeals"></div>
      <button className="ExampleMeals">➕</button>
      <div className="ExampleMeals"></div>
      <button className="ExampleMeals">➕</button>
      <img src="" alt="" className="ExampleMeals" />
    </ExampleMealsStyles>
  );
}

const ExampleMealsStyles = styled.div``;
function AppBar({}) {
  return (
    <AppBarStyles>
      <div className="AppBar">
        <Chip>
          <Chip>🏚</Chip>
          <Chip>📁</Chip>
          <Chip>💬</Chip>
          <Chip>⚪</Chip>
        </Chip>
      </div>
      ;
    </AppBarStyles>
  );
}

const AppBarStyles = styled.div``;
