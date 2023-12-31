"use client";

import { styled } from "styled-components";
import { FiShoppingBag } from "react-icons/fi";
import { useCartWithLocalStorage } from "@/hooks";
import { useRouter } from "next/navigation";

const Container = styled.div`
  position: relative;
  cursor: pointer;
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
  const router = useRouter();

  return (
    <Container onClick={() => router.push("/cart")}>
      <FiShoppingBag size={24} />
      {cart && cart.length > 0 && <CartCount>!</CartCount>}
    </Container>
  );
}
