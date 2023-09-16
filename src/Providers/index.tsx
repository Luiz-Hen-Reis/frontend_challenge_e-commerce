"use client";

import StyledComponentsRegistry from "@/app/registry";
import { FilterProvider } from "@/contexts/FilterContext";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface Props {
  children: ReactNode;
}

const theme = {
  breakPoint: "768px",
  largeBreakPoint: "930px",
};

export function Providers({ children }: Props) {
  return (
    <FilterProvider>
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </StyledComponentsRegistry>
    </FilterProvider>
  );
}
