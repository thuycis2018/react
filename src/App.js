import { useState } from 'react';
import ProductCreate from './components/ProductCreate';
import ProductList from './components/ProductList';

function App() {
  const [products, setProducts] = useState([]);

  const editProductById = (id, newTitle) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, title: newTitle };
      }

      return product;
    });

    setProducts(updatedProducts);
  };

  const deleteProductById = (id) => {
    const updatedProducts = products.filter((product) => {
      return product.id !== id;
    });

    setProducts(updatedProducts);
  };

  const createProduct = (title) => {
    const updatedProducts = [
      ...products,
      {
        id: Math.round(Math.random() * 100),
        title,
      },
    ];
    setProducts(updatedProducts);
  };

  return (
    <div className="app">
      <h1>Products</h1>
      <ProductCreate onCreate={createProduct} />
      <ProductList onEdit={editProductById} products={products} onDelete={deleteProductById} />
      
    </div>
  );
}

export default App;
