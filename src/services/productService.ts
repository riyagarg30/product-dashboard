import { Product } from "../types/product";

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch("https://fakestoreapi.com/products");

  console.log("Response status:", response.status);
  console.log("Response status text:", response.statusText);
  console.log("Response headers:", response.headers);


  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();
  console.log("Fetched products:", data);

  return data
};