"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Product } from "@/types/product";

async function fetcher() {
  const { data } = await axios.get(`/api/products`);
  const products: Product[] = await data;

  return products;
}

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  async function getProducts() {
    setLoading(true);
    setProducts(await fetcher());
    setLoading(false);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return {
    loading,
    products,
  };
}
