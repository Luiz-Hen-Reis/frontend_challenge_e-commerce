import { FilterTypes } from "@/types/filterTypes";
import { Product } from "@/types/product";

function setCategories(type: FilterTypes) {
  if (type === FilterTypes.MUG) return "mugs";
  if (type === FilterTypes.SHIRT) return "t-shirts";
  return "";
}

export function filterByCategory(type: FilterTypes, products: Product[]) {
  const category = setCategories(type);

  if (category === "mugs") {
    const mugs = products.filter((product) => product.category === "mugs");

    return mugs;
  }

  if (category === "t-shirts") {
    const shirts = products.filter(
      (product) => product.category === "t-shirts"
    );

    return shirts;
  }

  return products;
}
