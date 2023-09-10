"use client";

import { Product } from "@/types/product";
import { useEffect, useState } from "react";

export interface LocalStorageProduct extends Product {
  quantity: number;
}

export function useCartWithLocalStorage() {
  const cartKey = "cart-items";

  const [cart, setCart] = useState<LocalStorageProduct[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cartItems = localStorage.getItem(cartKey);
      if (cartItems) {
        setCart(JSON.parse(cartItems));
      }
    }
  }, []);

  const addToCart = (product: Product, id: string) => {
    const cartItems = localStorage.getItem(cartKey);

    if (cartItems) {
      let cartItemsArray = JSON.parse(cartItems);

      let existingProductIndex = cartItemsArray.findIndex(
        (item: { id: string }) => item.id === id
      );

      if (existingProductIndex != -1) {
        cartItemsArray[existingProductIndex].quantity += 1;
      } else {
        cartItemsArray.push({ ...product, quantity: 1, id });
      }

      localStorage.setItem(cartKey, JSON.stringify(cartItemsArray));
    } else {
      localStorage.setItem(
        cartKey,
        JSON.stringify([
          {
            ...product,
            id,
            quantity: 1,
          },
        ])
      );
    }
  };

  const removeFromCart = (id: number) => {
    const cartItems = localStorage.getItem(cartKey);

    if (cartItems) {
      let cartItemsArray = JSON.parse(cartItems);

      let existingProductIndex = cartItemsArray.findIndex(
        (item: { id: string }) => item.id === id.toString()
      );

      if (existingProductIndex != -1) {
        cartItemsArray.splice(existingProductIndex, 1);
      }
      localStorage.setItem(cartKey, JSON.stringify(cartItemsArray));
    }

    return;
  };

  const increaseItemQuantity = (id: number) => {
    const cartItems = localStorage.getItem(cartKey);

    if (cartItems) {
      let cartItemsArray = JSON.parse(cartItems);

      let existingProductIndex = cartItemsArray.findIndex(
        (item: { id: string }) => item.id === id.toString()
      );

      if (existingProductIndex != -1) {
        cartItemsArray[existingProductIndex].quantity += 1;
      }

      localStorage.setItem(cartKey, JSON.stringify(cartItemsArray));
    }

    return;
  };

  const decreaseItemQuantity = (id: number) => {
    const cartItems = localStorage.getItem(cartKey);

    if (cartItems) {
      let cartItemsArray = JSON.parse(cartItems);

      let existingProductIndex = cartItemsArray.findIndex(
        (item: { id: string }) => item.id === id.toString()
      );

      if (existingProductIndex != -1) {
        cartItemsArray[existingProductIndex].quantity -= 1;
      }

      localStorage.setItem(cartKey, JSON.stringify(cartItemsArray));
    }

    return;
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    increaseItemQuantity,
    decreaseItemQuantity,
  };
}
