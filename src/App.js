import { useEffect } from 'react';
import ProductCreate from './components/ProductCreate';
import ProductList from './components/ProductList';
import useProductsContext from './hooks/use-products-context';

function App() {
  const {getProducts} = useProductsContext();
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div className="app">
      <h1>Products</h1>
      <ProductCreate />
      <ProductList />     
    </div>
  );
}

export default App;
