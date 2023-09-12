"use client";

import styled from "styled-components";
import { Saira_Stencil_One } from "next/font/google";
import { useFilter } from "@/contexts/FilterContext";
import CartControl from "../../ui/CartControl";
import { InputBarWSearchIcon } from "@/components";

const SairaStencilOne = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});

const HeaderTag = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.4rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoint}) {
    padding: 2rem 16rem;
  }
`;

const Logo = styled.a`
  font-size: 3.5rem;
  line-height: 4rem;
  color: var(--logo-color);
  text-align: left;

  @media (min-width: ${(props) => props.theme.breakPoint}) {
    font-size: 4rem;
    line-height: 6rem;
  }
`;

export default function Header() {
  const { search, setSearch } = useFilter();

  return (
    <HeaderTag>
      <Logo className={SairaStencilOne.className} href="/">
        Capoteeno
      </Logo>
      <div>
        <InputBarWSearchIcon
          value={search}
          handleChange={setSearch}
          placeholder="Procurando por algo específico?"
        />
        <CartControl />
      </div>
    </HeaderTag>
  );
}
