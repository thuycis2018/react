import { useEffect } from 'react';
import ProductCreate from './pages/ProductCreate';
import ProductList from './pages/ProductList';
import ProductPage from './pages/ProductPage'
import useProductsContext from './hooks/use-products-context';

function App() {
  const {getProducts} = useProductsContext();
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div className="app">
      <ProductCreate />
      <ProductPage />
      {/* <ProductList />      */}
    </div>
  );
}

export default App;
