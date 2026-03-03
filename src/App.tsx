import { useMemo, useState } from "react";
import { useProducts } from "./hooks/useProduct";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import AddProductForm from "./components/AddProductsForm";
import { Product } from "./types/product";
import "./styles/App.css";

function App() {
  const { products, setProducts, loading, error } = useProducts();
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  const addProduct = (product: Product) => {
    setProducts((prev) => [...prev, product]);
  };

  const deleteProduct = (id: number) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const filteredProducts = useMemo(() => {
    let result = products.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase()),
    );

    result.sort((a, b) => (sortAsc ? a.price - b.price : b.price - a.price));

    return result;
  }, [products, search, sortAsc]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="app-container">
      <h1 className="header">Product Dashboard</h1>

      <div className="controls">
        <SearchBar search={search} setSearch={setSearch} />
        <button onClick={() => setSortAsc(!sortAsc)}>
          Sort by Price ({sortAsc ? "Asc" : "Desc"})
        </button>
        <AddProductForm addProduct={addProduct} />
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDelete={deleteProduct}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
