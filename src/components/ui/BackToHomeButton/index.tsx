"use client";

import styled from "styled-components";
import { BsArrowLeftCircle } from "react-icons/bs";
import { useRouter } from "next/navigation";

const Button = styled.button`
  all: unset;
  align-self: flex-start;
  margin-bottom: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  font-family: inherit;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--text-dark);
  cursor: pointer;
`;

export default function BackToHomeButton() {
  const router = useRouter();

  return (
    <Button onClick={() => router.push("/")}>
      <span>
        <BsArrowLeftCircle />
      </span>
      Voltar
    </Button>
  );
}
