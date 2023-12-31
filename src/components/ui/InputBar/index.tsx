"use client";

import { BsSearch } from "react-icons/bs";
import { InputHTMLAttributes } from "react";
import { styled } from "styled-components";

const PrimaryInput = styled.input`
  display: none;

  @media (min-width: ${(props) => props.theme.largeBreakPoint}) {
    display: block;
    width: 35.2rem;
    border-radius: 0.8rem;
    border: none;
    padding: 1rem 1.6rem;
    background-color: var(--bg-secondary);
    font-family: inherit;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.2rem;
    color: var(--text-dark);
  }
`;

const InputContainer = styled.div`
  display: none;

  @media (min-width: ${(props) => props.theme.largeBreakPoint}) {
    display: block;
    position: relative;
    width: inherit;

    svg {
      position: absolute;
      right: 2rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  handleChange: (value: string) => void;
}

export default function InputBarWSearchIcon(props: InputProps) {
  return (
    <InputContainer>
      <PrimaryInput
        onChange={(event) => props.handleChange(event.target.value)}
        {...props}
      />
      <BsSearch size={20} />
    </InputContainer>
  );
}
