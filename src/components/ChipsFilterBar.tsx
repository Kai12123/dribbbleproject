import { Chips, Chip } from "@mantine/core";
import styled from "styled-components";
import { useState } from "react";

export function ChipsFilterBar({}) {
  const [selectedValue, setSelectedValue] = useState("chips");
  return (
    <ChipsFilterBarStyles>
      <div className="ChipsFilterBarAll">
        <Chips
          color="dark"
          variant="filled"
          multiple={false}
          value={selectedValue}
          onChange={(clickedChipValue) => {
            setSelectedValue(clickedChipValue);
          }}
        >
          <Chip className="1stChip" value="salad">
            Salad {selectedValue === "salad" ? "🥗" : "😢"}
          </Chip>
          <Chip className="2ndChip" value="chips">
            Chips
          </Chip>
          <Chip className="3rdChip" value="pasta">
            Pasta
          </Chip>
        </Chips>
      </div>
    </ChipsFilterBarStyles>
  );
}
const ChipsFilterBarStyles = styled.div``;
