"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Product } from "@/types/product";
import { useFilter } from "@/contexts/FilterContext";

async function fetcher(page: number) {
  const { data } = await axios.get(`/api/products?limit=12&page=${24 * page}`);
  const products: Product[] = await data;

  return products;
}

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { page } = useFilter();

  async function getProducts() {
    setLoading(true);
    setProducts(await fetcher(page));
    setLoading(false);
  }

  useEffect(() => {
    getProducts();

    return () => {
      setLoading(true);
      setProducts([]);
    };
  }, [page]);

  return { products, loading };
}
