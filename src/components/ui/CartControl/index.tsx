"use client";

import { styled } from "styled-components";
import CartIcon from "../../icons/CartIcon";
import { useCartWithLocalStorage } from "@/hooks";

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
  const { cart } = useCartWithLocalStorage();

  return (
    <Container>
      <CartIcon />
      {cart && cart.length > 0 && <CartCount>{cart.length}</CartCount>}
    </Container>
  );
}
