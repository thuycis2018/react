import { useContext } from 'react';
import ProductsContext from '../context/products';

function useProductsContext(){
    return useContext(ProductsContext);
}

export default useProductsContext;