"use client";

import { BackToHomeButton, CartItem } from "@/components";
import { useCartWithLocalStorage } from "@/hooks";
import { LocalStorageProduct } from "@/hooks/useCartWithLocalStorage";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  font-family: inherit;
  gap: 2rem;

  section {
    width: 70%;

    h1 {
      font-size: 2.4rem;
      font-weight: 500;
      color: var(--text-dark-2);
    }

    p {
      font-size: 1.6rem;
      font-weight: 300;

      span {
        font-size: 1.6rem;
        font-weight: 500;
      }
    }
  }

  aside {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 75vh;
    background-color: var(--shapes-light);
    padding: 1.2rem 1.6rem;
    font-size: 1.6rem;
    font-weight: 400;

    .upper-part {
      h3 {
        font-size: 2rem;
        font-weight: 600;
        color: var(--text-dark-2);
      }

      .table {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: space-between;
        margin: 2rem 0;

        > div {
          margin: 0.4rem 0;
        }

        .price-total {
          justify-self: end;
        }
      }

      hr {
        color: var(--shapes);
      }

      .total-field {
        font-weight: 600;
      }

      button {
        width: 100%;
        height: 4.4rem;
        border-radius: 0.4rem;
        margin-bottom: 0.4rem;
        font-size: 1.6rem;
        font-weight: 500;
        border: none;
        background-color: var(--green);
        color: var(--shapes-light);
        cursor: pointer;
      }
    }

    .bottom-part {
      p {
        font-size: 1.4rem;
        font-weight: 500;
        text-decoration: underline;
        color: var(--text-dark);
        cursor: pointer;
        margin: 0.2rem 0;
      }
    }
  }
`;

export default function Cart() {
  const { cart, removeFromCart } = useCartWithLocalStorage();
  const [cartItems, setCartItems] = useState<LocalStorageProduct[]>([]);

  useEffect(() => {
    if (cart) {
      setCartItems([...cart]);
    }

    return () => setCartItems([]);
  }, [cart]);

  const handleRemoveFromCart = (id: number) => {
    removeFromCart(id);
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
  };

  return (
    <main>
      <BackToHomeButton />
      <Container>
        <section>
          <div>
            <h1>SEU CARRINHO</h1>
            <p>
              Total ({cartItems.length} produtos) <span>0.00</span>
            </p>
          </div>
          <ul>
            {cartItems.map((product) => (
              <CartItem
                {...product}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            ))}
          </ul>
        </section>
        <aside>
          <div className="upper-part">
            <h2>RESUMO DO PEDIDO</h2>
            <div className="table">
              <div>Subtotal de produtos</div>
              <div className="price-total">R$ 161,00</div>
              <div>Entrega</div>
              <div className="price-total">R$ 40,00</div>
            </div>
            <hr />
            <div className="table total-field">
              <div>Total</div>
              <div className="price-total">R$ 40,00</div>
            </div>
            <button>FINALIZAR A COMPRA</button>
          </div>
          <div className="bottom-part">
            <p>AJUDA</p>
            <p>REEMBOLSOS</p>
            <p>ENTREGAS E FRETE</p>
            <p>TROCAS E DEVOLUÇÕES</p>
          </div>
        </aside>
      </Container>
    </main>
  );
}
