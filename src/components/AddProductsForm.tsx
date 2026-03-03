import { useState } from "react";
import { Product } from "../types/product";
import "../styles/AddProductForm.css";

type Props = {
  addProduct: (product: Product) => void;
};

const AddProductForm = ({ addProduct }: Props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct: Product = {
      id: Date.now(),
      title,
      price,
      description: "",
      category: "custom",
      image: "https://via.placeholder.com/150"
    };

    addProduct(newProduct);
    setTitle("");
    setPrice(0);
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="add-input"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        placeholder="Price"
        className="add-input"
      />
      <button className="add-btn" type="submit">Add</button>
    </form>
  );
};

export default AddProductForm;