import { Category } from "./category.model";

export interface Product {
    name: string;
    slug: string;
    description: Description;
    image: Image;
    price: number;
    category: Category;
}

export type Image = {
    url: string;
}

export type Description = {
    text: string;
}