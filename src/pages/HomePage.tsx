import styled from "styled-components";
import { ChipsFilterBar } from "../components/ChipsFilterBar";
import { HeroProduct } from "../components/HeroProduct";
import { ExampleMeals } from "../components/ExampleMeals";

export function HomePage({}) {
  return (
    <HomePageStyles>
      <PageTitle />
      <ChipsFilterBar />
      <div className="section hero">
        <HeroProduct />
      </div>
      <div className="ProductPreview"></div>
      <ExampleMeals />
    </HomePageStyles>
  );
}

const HomePageStyles = styled.div`
  .hero.section {
    margin: 3em 0;
  }
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
