"use client";

import { useFilteredProducts, useProducts } from "@/hooks";
import { styled } from "styled-components";
import ProductItem from "../ProductItem";

const ListContainer = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

  margin-top: 4.4rem;

  @media (min-width: ${(props) => props.theme.breakPoint}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default function ProductList() {
  const { filteredProducts } = useFilteredProducts();

  return (
    <ListContainer>
      {filteredProducts.map((product) => (
        <ProductItem {...product} />
      ))}
    </ListContainer>
  );
}
