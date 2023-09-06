import { Product } from "@/types/product";
import axios from "axios";
import { headers } from "next/headers";

export async function useProducts() {
  const host = headers().get("host");
  const { data } = await axios.get(`http://${host!}/api/products`);
  const products: Product[] = await data;

  return {
    products,
  };
}
