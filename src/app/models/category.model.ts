import { Product } from "./product.model";

export interface Category {
  name: string;
  slug: string;
  products: Product[];
}
