import { useProducts } from "@/hooks";

export default async function ProductList() {
  const { products } = await useProducts();

  return (
    <div>
      {products.map((product) => (
        <div>{product.name}</div>
      ))}
    </div>
  );
}
