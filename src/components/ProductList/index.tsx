"use client";

import { useFilteredProducts } from "@/hooks";
import { styled } from "styled-components";
import ProductItem from "../ProductItem";
import { Pagination } from "..";

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
  const { filteredProducts, loading } = useFilteredProducts();

  return (
    <>
      <Pagination totalProducts={filteredProducts.length} />
      <ListContainer>
        {loading && <div>Carregando...</div>}
        {!loading &&
          filteredProducts.map((product) => (
            <ProductItem {...product} key={product.id} />
          ))}
      </ListContainer>
      <Pagination totalProducts={filteredProducts.length} />
    </>
  );
}
