"use client";

import styled from "styled-components";
import { Saira_Stencil_One } from "next/font/google";

const SairaStencilOne = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});

const HeaderTag = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 16rem;
`;

const Logo = styled.span`
  font-size: 4rem;
  line-height: 6rem;
  color: var(--logo-color);
  text-align: left;
`;

export default function Header() {
  return (
    <HeaderTag>
      <Logo className={SairaStencilOne.className}>Capoteeno</Logo>
    </HeaderTag>
  );
}
