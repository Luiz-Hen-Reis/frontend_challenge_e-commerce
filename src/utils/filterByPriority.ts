import { PriorityTypes } from "@/types/priorityTypes";
import { Product } from "@/types/product";

export function filterByPriority(priority: PriorityTypes, products: Product[]) {
  if (priority === PriorityTypes.MAJOR_PRICE) {
    const filteredByMajorPrice = products.sort(
      (productA, productB) => productB.price_in_cents - productA.price_in_cents
    );

    return filteredByMajorPrice;
  }
  if (priority === PriorityTypes.MINOR_PRICE) {
    const filteredByMinorPrice = products.sort(
      (productA, productB) => productA.price_in_cents - productB.price_in_cents
    );

    return filteredByMinorPrice;
  }

  return products;
}
