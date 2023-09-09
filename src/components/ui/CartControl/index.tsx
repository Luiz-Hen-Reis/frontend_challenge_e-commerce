"use client";

import { styled } from "styled-components";
import CartIcon from "../../icons/CartIcon";
import { useLocalStorage } from "@/hooks";

const Container = styled.div`
  position: relative;
`;

const CartCount = styled.span`
  position: absolute;
  right: -1rem;
  top: 1.5rem;
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 50%;
  background-color: var(--delete-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function CartControl() {
  const { value } = useLocalStorage("cart-items");

  return (
    <Container>
      <CartIcon />
      {value && value.length > 0 && <CartCount>{value.length}</CartCount>}
    </Container>
  );
}
