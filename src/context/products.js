import { createContext, useState, useCallback } from 'react';
import axios from 'axios';

const ProductsContext = createContext();

function Provider({children}){
    const [products, setProducts] = useState([]);
    // use json-server for dev
    const apiUrl = 'http://localhost:3001';

    // useCallback to get stable function reference to use getProducts inside useEffect in App.js
    const getProducts = useCallback(async () => {
      const response = await axios.get(`${apiUrl}/products`);
      setProducts(response.data);
    }, []);

    const createProduct = async (name) => {
        const response = await axios.post(`${apiUrl}/products`, {name: name});
        const updatedProducts = [
          ...products,
          response.data,
        ];
        setProducts(updatedProducts);
      };
    
      const editProductById = async (id, newName) => {
        const response = await axios.put(`${apiUrl}/products/${id}`, {name: newName});
        const updatedProducts = products.map((product) => {
          if (product.id === id) {
            return { ...product, ...response.data };
          }
    
          return product;
        });
    
        setProducts(updatedProducts);
      };
    
      const deleteProductById = async (id) => {
        await axios.delete(`${apiUrl}/products/${id}`);
        const updatedProducts = products.filter((product) => {
          return product.id !== id;
        });
    
        setProducts(updatedProducts);
      };

    const contextData = {
        products,
        deleteProductById,
        editProductById,
        createProduct,
        getProducts
    }
    return <ProductsContext.Provider value={contextData}>
        {children}
    </ProductsContext.Provider>
}

export { Provider };
export default ProductsContext;
