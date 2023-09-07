import { useFilter } from "@/contexts/FilterContext";
import { useProducts } from ".";
import { filterByCategory } from "@/utils/filterByCategory";
import { filterByPriority } from "@/utils/filterByPriority";

export function useFilteredProducts() {
  const { products } = useProducts();
  const { type, priority } = useFilter();

  const filteredProductsByCategory = filterByCategory(type, products);

  const filteredProductsByPriority = filterByPriority(
    priority,
    filteredProductsByCategory
  );

  return { filteredProducts: filteredProductsByPriority };
}
