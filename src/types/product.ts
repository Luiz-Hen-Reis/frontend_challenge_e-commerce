export interface Product {
  id: number;
  name: string;
  description: string;
  image_url: string;
  category: "t-shirts" | "mugs" | "";
  price_in_cents: number;
  sales: number;
}
