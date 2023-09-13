"use client";

import { GoTrash } from "react-icons/go";
import {
  LocalStorageProduct,
  useCartWithLocalStorage,
} from "@/hooks/useCartWithLocalStorage";
import { formatPrice } from "@/utils";
import { useState } from "react";
import styled from "styled-components";

interface CartItemProps extends LocalStorageProduct {
  handleRemoveFromCart: (id: number) => void;
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

  .left-side {
    width: 100%;

    @media (min-width: ${(props) => props.theme.largeBreakPoint}) {
      width: 25.6rem;
    }

    img {
      width: inherit;
    }
  }

  .right-side {
    padding: 2rem 1.6rem 2rem 0;

    .title,
    .quantity-price-area {
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        cursor: pointer;
      }
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

    .quantity-price-area {
      .quantity-field {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        button,
        span {
          font-size: 1.4rem;
          padding: 0.4rem 0.8rem;
          cursor: pointer;
        }
      }

      span {
        align-self: end;
        font-size: 1.6rem;
        font-weight: 600;
      }
    }
  }
`;

export default function CartItem({
  image_url: imageUrl,
  name,
  description,
  price_in_cents: price,
  quantity,
  id,
  handleRemoveFromCart,
}: CartItemProps) {
  const { increaseItemQuantity, decreaseItemQuantity } =
    useCartWithLocalStorage();
  const [itemQuantity, setItemQuantity] = useState<number>(quantity);

  function handleIncreaseItemQuantity(id: number) {
    setItemQuantity(itemQuantity + 1);
    increaseItemQuantity(id);
  }

  function handleDecreaseItemQuantity(id: number) {
    if (itemQuantity > 1) {
      setItemQuantity(itemQuantity - 1);
      decreaseItemQuantity(id);
    }
  }

  return (
    <ItemContainer>
      <div className="left-side">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="right-side">
        <div className="title">
          <h2>{name}</h2>
          <span onClick={() => handleRemoveFromCart(id)}>
            <GoTrash size={20} />
          </span>
        </div>
        <p>{description}</p>
        <div className="quantity-price-area">
          <div className="quantity-field">
            <button onClick={() => handleDecreaseItemQuantity(id)}>-</button>
            <span>{itemQuantity}</span>
            <button onClick={() => handleIncreaseItemQuantity(id)}>+</button>
          </div>
          <span>{formatPrice(price)}</span>
        </div>
      </div>
    </ItemContainer>
  );
}
