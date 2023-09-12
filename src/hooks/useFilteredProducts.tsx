import { useFilter } from "@/contexts/FilterContext";
import { useProducts } from ".";
import { filterByCategory } from "@/utils/filterByCategory";
import { filterByPriority } from "@/utils/filterByPriority";

export function useFilteredProducts() {
  const { products, loading } = useProducts();
  const { type, priority, search } = useFilter();

  const filteredProductsByCategory = filterByCategory(type, products);

  const filteredProductsByPriority = filterByPriority(
    priority,
    filteredProductsByCategory
  );

  const filteredProductsBySearch =
    search !== ""
      ? filteredProductsByPriority.filter((product) =>
          product.name.toLowerCase().includes(search.toLowerCase())
        )
      : filteredProductsByPriority;

  return { filteredProducts: filteredProductsBySearch, loading };
}
