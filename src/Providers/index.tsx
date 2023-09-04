"use client";

import { FilterProvider } from "@/contexts/FilterContext";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface Props {
  children: ReactNode;
}

const theme = {
  breakPoint: "768px",
};

export default function Providers({ children }: Props) {
  return (
    <FilterProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </FilterProvider>
  );
}
