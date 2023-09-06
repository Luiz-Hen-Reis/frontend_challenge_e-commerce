import axios from "axios";
import { Product } from "@/types/product";

export async function useProducts() {
  const { data } = await axios.get(`http://localhost:3000/api/products`);
  const products: Product[] = await data;

  return {
    products,
  };
}
