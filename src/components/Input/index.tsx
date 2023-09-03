"use client";

import { ChangeEvent, InputHTMLAttributes } from "react";
import { styled } from "styled-components";
import SearchIcon from "../SvgIcons/SearchIcon";
import { useFilter } from "@/contexts/FilterContext";

const Box = styled.div`
  width: 35rem;
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    right: 1.5rem;
    transform: translateY(-50%);
  }
`;

const Input = styled.input`
  width: inherit;
  padding: 1rem 1.4rem;
  padding: 1.6rem 1.4rem;
  border-radius: 0.8rem;
  border: none;
  outline: none;
  background-color: var(--bg-secondary);
  color: var(--text-dark);
  font-weight: 400;
  font-family: inherit;
  line-height: 2.2rem;
`;

interface InputWSearchIconProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function InputWSearchIcon(props: InputWSearchIconProps) {
  const { search, setSearch } = useFilter();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  return (
    <Box>
      <Input {...props} value={search} onChange={() => handleChange} />
      <SearchIcon />
    </Box>
  );
}
