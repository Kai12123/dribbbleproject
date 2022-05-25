import { ActionIcon, Burger } from "@mantine/core";
import styled from "styled-components";
import { SearchRounded } from "@mui/icons-material";

export function NavBar({}) {
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
