"use client";

import { BackToHomeButton } from "@/components";
import { useCartWithLocalStorage } from "@/hooks";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  section {
    width: 70%;
  }

  aside {
    flex: 1;
  }
`;

export default function Cart() {
  const { cart } = useCartWithLocalStorage();

  return (
    <main>
      <BackToHomeButton />
      <Container>
        <section>
          <div>
            <h1>SEU CARRINHO</h1>
            <p>Total ({cart.length} produtos):</p>
          </div>
          <div>
            {cart.map((item) => (
              <div>{item.name}</div>
            ))}
          </div>
        </section>
        <aside>resumo</aside>
      </Container>
    </main>
  );
}
