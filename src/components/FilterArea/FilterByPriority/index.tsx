"use client";

import { styled } from "styled-components";
import ArrowDown from "@/components/icons/ArrowDown";
import { useState } from "react";
import { useFilter } from "@/contexts/FilterContext";
import { PriorityTypes } from "@/types/priorityTypes";

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button {
    all: unset;
    font-family: inherit;
    color: var(--text-dark);
    font-weight: 400;
    font-size: 0.8rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-left: 0.8rem;
    }

    @media (min-width: ${(props) => props.theme.breakPoint}) {
      font-size: 1.4rem;
    }
  }
`;

const PriorityList = styled.ul`
  position: absolute;
  width: 18rem;
  background: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 0.4rem;
  padding: 0.8rem 1.2rem;
  z-index: 99;

  list-style: none;

  top: 100%;
  left: -60%;

  li {
    color: var(--text-dark);
    font-weight: 400;
    font-size: 1rem;
    line-height: 2.2rem;
    cursor: pointer;
  }

  li + li {
    margin-top: 0.4rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoint}) {
    padding: 1.2rem 1.6rem;

    li {
      font-size: 1.4rem;
      line-height: 2.2rem;
    }
  }
`;

export default function FilterByPriority() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { setPriority } = useFilter();

  function handleOpen() {
    setIsOpen((prev) => !prev);
  }

  function handlePriority(value: PriorityTypes) {
    setPriority(value);
    setIsOpen(false);
  }

  return (
    <Container>
      <button onClick={handleOpen}>
        Organizar por
        <ArrowDown />
      </button>
      {isOpen && (
        <PriorityList>
          <li onClick={() => handlePriority(PriorityTypes.MAJOR_PRICE)}>
            Preço: Maior - menor
          </li>
          <li onClick={() => handlePriority(PriorityTypes.MINOR_PRICE)}>
            Preço: Menor - maior
          </li>
          <li onClick={() => handlePriority(PriorityTypes.POPULARITY)}>
            Mais vendidos
          </li>
        </PriorityList>
      )}
    </Container>
  );
}
