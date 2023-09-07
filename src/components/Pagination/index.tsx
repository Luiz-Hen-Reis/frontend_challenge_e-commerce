"use client";

import { useFilter } from "@/contexts/FilterContext";
import { styled } from "styled-components";

interface Props {
  totalProducts: number;
}

const BtnContainer = styled.div`
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  margin-top: 1.2rem;
`;

const Button = styled.button<{ limit: boolean }>`
  cursor: pointer;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 0.8rem;
  background-color: var(--shapes);
  color: ${(props) =>
    props.limit ? "var(--delete-color)" : "var(--text-dark)"};
  border: ${(props) =>
    props.limit ? "1px solid var(--delete-color)" : "none"};
`;

export default function Pagination({ totalProducts }: Props) {
  const { setPage, page } = useFilter();

  const totalPages = Math.ceil((totalProducts * 5) / 24);

  function handleClickLeft() {
    if (page > 0) setPage(page - 1);
  }

  function handleClickRight() {
    if (page + 1 < totalPages) setPage(page + 1);
  }

  return (
    <BtnContainer>
      <Button onClick={handleClickLeft} limit={page === 0}>
        &#60;
      </Button>
      <Button onClick={handleClickRight} limit={page + 1 === totalPages}>
        &#62;
      </Button>
    </BtnContainer>
  );
}
