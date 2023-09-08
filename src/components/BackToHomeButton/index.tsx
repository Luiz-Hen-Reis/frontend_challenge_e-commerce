"use client";

import styled from "styled-components";
import ArrowLeft from "../icons/ArrowLeft";
import Link from "next/link";

const Button = styled.button`
  all: unset;
  align-self: flex-start;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    font-family: inherit;
    font-weight: 500;
    font-size: 1.4rem;
    color: var(--text-dark);
  }
`;

export default function BackToHomeButton() {
  return (
    <Button>
      <Link href="/">
        <span>
          <ArrowLeft />
        </span>
        Voltar
      </Link>
    </Button>
  );
}
