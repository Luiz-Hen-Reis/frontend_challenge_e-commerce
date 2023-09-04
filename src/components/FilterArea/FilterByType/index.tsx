"use client";

import { useFilter } from "@/contexts/FilterContext";
import { FilterTypes } from "@/types/filterTypes";
import { styled } from "styled-components";

const FilterContainer = styled.ul`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 2rem;
`;

const FilterItem = styled.li<{ active?: boolean }>`
  padding: 0.2rem;
  font-family: inherit;
  list-style: none;
  font-size: 0.9rem;
  color: var(--text-dark);
  font-weight: ${(props) => (props.active ? 600 : 400)};
  border-bottom: ${(props) =>
    props.active ? "4px solid var(--orange-low)" : ""};
  cursor: pointer;

  @media (min-width: ${(props) => props.theme.breakPoint}) {
    font-size: 1.6rem;
  }
`;

export default function FilterByType() {
  const { type, setType } = useFilter();

  function handleType(newType: FilterTypes) {
    setType(newType);
  }

  return (
    <FilterContainer>
      <FilterItem
        active={type === FilterTypes.ALL}
        onClick={() => handleType(FilterTypes.ALL)}
      >
        TODOS OS PRODUTOS
      </FilterItem>
      <FilterItem
        active={type === FilterTypes.SHIRT}
        onClick={() => handleType(FilterTypes.SHIRT)}
      >
        CAMISETAS
      </FilterItem>
      <FilterItem
        active={type === FilterTypes.MUG}
        onClick={() => handleType(FilterTypes.MUG)}
      >
        CANECAS
      </FilterItem>
    </FilterContainer>
  );
}
