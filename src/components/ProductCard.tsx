import { Product } from "../types/product";
import "../styles/ProductCard.css";

type Props = {
  product: Product;
  onDelete: (id: number) => void;
};

const ProductCard = ({ product, onDelete }: Props) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} width={80} className="product-image"/>
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">${product.price}</p>
      <button className="delete-btn" onClick={() => onDelete(product.id)}>Delete</button>
    </div>
  );
};

export default ProductCard;