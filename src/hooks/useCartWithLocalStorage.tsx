"use client";

import { Product } from "@/types/product";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export interface LocalStorageProduct extends Product {
  quantity: number;
}

export function useCartWithLocalStorage<T>() {
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
        toast.success(
          `${cartItemsArray[existingProductIndex].name} adicionado +1`
        );
      } else {
        cartItemsArray.push({ ...product, quantity: 1, id });
        toast.success("Item adicionado ao carrinho!");
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
      toast.success("Item adicionado ao carrinho!");
    }
  };

  const updateLocalStorage = (newValue: LocalStorageProduct[]) => {
    setCart(newValue);
    localStorage.setItem(cartKey, JSON.stringify(newValue));
  };

  return {
    cart,
    addToCart,
    updateLocalStorage,
  };
}
