"use client";

import { useState, useEffect } from "react";
import { Product } from "@/types/product";
import axios from "axios";

async function fetcher(id: string) {
  const { data } = await axios.get(`/api/product?id=${id}`);
  const product: Product = await data;

  return product;
}

export function useProductById(id: string) {
  const [product, setProduct] = useState<Product | null>();
  const [loading, setLoading] = useState<boolean>(true);

  async function getProduct() {
    setLoading(true);
    setProduct(await fetcher(id as string));
    setLoading(false);
  }

  useEffect(() => {
    getProduct();

    return () => {
      setLoading(true);
      setProduct(null);
    };
  }, []);

  return {
    product,
    loading,
  };
}
