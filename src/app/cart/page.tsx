"use client";

import styled from "styled-components";
import { useEffect, useState } from "react";
import { BackToHomeButton, CartItem, CartResume, Loading } from "@/components";
import { useCartWithLocalStorage } from "@/hooks";
import { LocalStorageProduct } from "@/hooks/useCartWithLocalStorage";
import { toast } from "react-toastify";
import { formatPrice } from "@/utils";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-family: inherit;
  gap: 2rem;

  @media (min-width: ${(props) => props.theme.largeBreakPoint}) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const CartItemsSection = styled.section`
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
`;

export default function Cart() {
  const { cart, updateLocalStorage, clearCartFromlocalStorage } =
    useCartWithLocalStorage();
  const [cartItems, setCartItems] = useState<LocalStorageProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    if (cart) {
      setCartItems([...cart]);
      setLoading(false);
    }

    return () => setCartItems([]);
  }, [cart]);

  const handleRemoveFromCart = (id: number) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
    updateLocalStorage(newCartItems);
  };

  const handleFinishCart = (): void => {
    toast.success("Pedido feito com sucesso! Obrigado", {
      autoClose: false,
      position: "top-center",
    });
    setCartItems([]);
    clearCartFromlocalStorage();
  };

  const updateCartQuantity = (id: number, quantity: number) => {
    const newValue = cartItems.map((item) => {
      if (item.id !== id) return item;
      return { ...item, quantity };
    });
    updateLocalStorage(newValue);
  };

  const deliveryFee = 4000;

  const cartItemsTotalPrice = cartItems.reduce(
    (sum, item) => (sum += item.price_in_cents * item.quantity),
    0
  );

  const totalPriceWDeliveryFee = formatPrice(cartItemsTotalPrice + deliveryFee);

  return (
    <main>
      <BackToHomeButton />
      <Container>
        <CartItemsSection>
          <div>
            <h1>SEU CARRINHO</h1>
            <p>
              Total ({cartItems.length} produtos){" "}
              <span>{formatPrice(cartItemsTotalPrice)}</span>
            </p>
          </div>
          <ul>
            {loading && <Loading />}
            {cartItems &&
              cartItems.map((product) => (
                <CartItem
                  {...product}
                  handleRemoveFromCart={handleRemoveFromCart}
                  updateCartQuantity={updateCartQuantity}
                />
              ))}
          </ul>
        </CartItemsSection>
        <CartResume
          totalItemsPrice={formatPrice(cartItemsTotalPrice)}
          deliveryFee={formatPrice(deliveryFee)}
          handleFinishCart={handleFinishCart}
          totalPriceWDeliveryFee={totalPriceWDeliveryFee}
        />
      </Container>
    </main>
  );
}
