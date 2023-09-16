"use client";

import { ChangeEvent } from "react";
import { GoTrash } from "react-icons/go";
import { LocalStorageProduct } from "@/hooks/useCartWithLocalStorage";
import { formatPrice } from "@/utils";
import styled from "styled-components";

interface CartItemProps extends LocalStorageProduct {
  handleRemoveFromCart: (id: number) => void;
  updateCartQuantity: (id: number, quantity: number) => void;
}

const ItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--shapes-light);
  gap: 2rem;
  margin: 2.2rem 0;
  border-radius: 0.8rem;
  font-family: inherit;

  @media (min-width: ${(props) => props.theme.largeBreakPoint}) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const ItemInfoContainer = styled.div`
  padding: 2rem 1.6rem 2rem 0;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h2 {
    font-size: 2rem;
    font-weight: 300;
    color: var(--text-dark-2);
  }

  p {
    margin: 2rem 0 4rem;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.8rem;
    color: var(--text-dark-2);
  }

  span {
    align-self: end;
    font-size: 1.6rem;
    font-weight: 600;
  }
`;

const DeleteIcon = styled(GoTrash)`
  cursor: pointer;
`;

const ImageContainer = styled.div`
  width: 100%;

  @media (min-width: ${(props) => props.theme.largeBreakPoint}) {
    width: 25.6rem;
  }

  img {
    width: inherit;
  }
`;

const SelectQuantity = styled.select`
  padding: 0.8rem;
  border-radius: 0.8rem;
  color: var(--text-dark);
  font-weight: 400;
  font-size: 1.6rem;
`;

export default function CartItem({
  image_url: imageUrl,
  name,
  description,
  price_in_cents: price,
  quantity,
  id,
  handleRemoveFromCart,
  updateCartQuantity,
}: CartItemProps) {
  const handleUpdateCartQuantity = (e: ChangeEvent<HTMLSelectElement>) => {
    updateCartQuantity(id, Number(e.target.value));
  };

  return (
    <ItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <ItemInfoContainer>
        <div>
          <h2>{name}</h2>
          <span onClick={() => handleRemoveFromCart(id)}>
            <DeleteIcon size={20} />
          </span>
        </div>
        <p>{description}</p>
        <div>
          <SelectQuantity value={quantity} onChange={handleUpdateCartQuantity}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </SelectQuantity>
          <span>{formatPrice(price)}</span>
        </div>
      </ItemInfoContainer>
    </ItemContainer>
  );
}
