"use client";

import { BackToHomeButton } from "@/components";
import { useCartWithLocalStorage, useProductById } from "@/hooks";
import { formatPrice } from "@/utils/formatPrice";
import { useParams } from "next/navigation";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (min-width: ${(props) => props.theme.breakPoint}) {
    flex-direction: row;
  }
`;

const LeftSide = styled.div`
  width: 100%;

  img {
    width: inherit;
  }

  @media (min-width: ${(props) => props.theme.breakPoint}) {
    width: 62rem;
  }
`;

const RightSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: inherit;
  color: var(--text-dark-2);

  h1 {
    font-size: 3.2rem;
    font-weight: 300;
    line-height: 4.8rem;
    padding: 0.8rem 0;
  }

  h2 {
    font-size: 1.6rem;
    font-weight: 500;
  }

  h3 {
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  strong {
    display: block;
    font-size: 2rem;
    font-weight: 600;
    line-height: 3rem;
    color: var(--shapes-dark);
    margin-bottom: 2rem;
  }

  span {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.8rem;
  }

  p {
    font-size: 1.4rem;
    font-weight: 400;
  }

  button {
    height: 4.4rem;
    border-radius: 0.4rem;
    margin-bottom: 0.4rem;
    font-size: 1.6rem;
    font-weight: 500;
    border: none;
    background-color: var(--brand-blue);
    color: var(--shapes-light);
    cursor: pointer;
  }

  .description-container {
    margin: 5rem 0;
  }
`;

export default function ProductPage() {
  const params = useParams();
  const { id } = params;
  const { product, loading } = useProductById(id as string);
  const { addToCart } = useCartWithLocalStorage();

  function handleAddToCart() {
    addToCart(product!, id as string);
  }

  return (
    <main>
      <BackToHomeButton />
      {loading && !product && <div>loading..</div>}
      {!loading && product && (
        <Container>
          <LeftSide>
            <img src={product.image_url} alt={product.name} />
          </LeftSide>
          <RightSide>
            <div>
              <h2>{product.category}</h2>
              <h1>{product.name}</h1>
              <strong>{formatPrice(product.price_in_cents)}</strong>
              <span>
                *Frete de R$40,00 para todo o Brasil. Grátis para compras acima
                de R$900,00.
              </span>
              <div className="description-container">
                <h3>DESCRIÇÃO</h3>
                <p>{product.description}</p>
              </div>
            </div>
            <button onClick={handleAddToCart}>ADICIONAR AO CARRINHO</button>
          </RightSide>
        </Container>
      )}
    </main>
  );
}
