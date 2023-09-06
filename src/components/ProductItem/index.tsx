"use client";
import { Product } from "@/types/product";
import { styled } from "styled-components";

const ItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 25.6rem;

  img {
    width: inherit;
    height: 30rem;
  }

  h3 {
    font-family: inherit;
    font-weight: 300;
    font-size: 1.6rem;
    padding: 0.8rem 1.2rem;
    color: var(--text-dark-2);
  }

  p {
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 150%;
    color: var(--shapes-dark);
  }

  div {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    padding: 0.8rem 0;

    > div {
      width: 22.8rem;
      height: 1px;
      margin: 8px 0;
      padding: 0px;
      background: var(--shapes);
    }
  }
`;

export default function ProductItem({
  image_url: imageUrl,
  price_in_cents: price,
  name,
}: Product) {
  return (
    <ItemContainer>
      <img src={imageUrl} />
      <div>
        <h3>{name}</h3>
        <div></div>
        <p>{price}</p>
      </div>
    </ItemContainer>
  );
}
