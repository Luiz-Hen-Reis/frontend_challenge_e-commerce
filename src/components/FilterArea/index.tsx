"use client";

import { styled } from "styled-components";
import FilterByType from "./FilterByType";
import FilterByPriority from "./FilterByPriority";

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export default function FilterArea() {
  return (
    <FilterContainer>
      <FilterByType />
      <FilterByPriority />
    </FilterContainer>
  );
}
