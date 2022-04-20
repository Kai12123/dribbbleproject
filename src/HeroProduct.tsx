import styled from "styled-components";
import { ActionIcon } from "@mantine/core";
import { Add } from "@mui/icons-material";
export function HeroProduct({}) {
  return (
    <HeroProductStyles>
      <img src="https://picsum.photos/500/500" alt="" />
      <div className="metadata">
        <h2 className="title">Chicken Salad</h2>
        <p className="subtitle">Chicken with Avocado</p>
        <p className="price">$32.00</p>
      </div>
      <ActionIcon className="btnAdd">
        <Add />
      </ActionIcon>
    </HeroProductStyles>
  );
}
const HeroProductStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  background: #f4f4f4;
  border-radius: 1000px;

  img {
    width: 180px;
    border-radius: 999px;
    transform: scale(1.2) translateX(-28px);
  }
  .btnAdd {
    background: black;
    border-radius: 9999px;
    color: white;
  }
  .metadata {
    display: flex;
    flex-direction: column;
    gap: 8px;
    * {
      margin: 0;
    }
  }
  p.price {
    font-weight: bold;
    font-size: 24px;
  }
`;
