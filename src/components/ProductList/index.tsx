"use client";

import { useProducts } from "@/hooks";
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

export default async function ProductList() {
  const { products } = await useProducts();

  return (
    <ListContainer>
      {products.map((product) => (
        <ProductItem {...product} />
      ))}
    </ListContainer>
  );
}
