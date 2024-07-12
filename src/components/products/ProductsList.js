import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchProducts, addProduct } from '../../store';
import { useThunk } from '../../hooks/use-thunk';
import Button from '../common/Button';
import Skeleton from '../common/Skeleton';
import ProductDetails from './ProductDetails';

function ProductsList() {
  const [doFetchProducts, isLoadingProducts, loadingProductsError] =
    useThunk(fetchProducts);
  const [doCreateProduct, isCreatingProduct, creatingProductError] = useThunk(addProduct);
  const { data } = useSelector((state) => {
    return state.products;
  });

  useEffect(() => {
    doFetchProducts();
  }, [doFetchProducts]);

  const handleProductAdd = () => {
    doCreateProduct();
  };

  let content;
  if (isLoadingProducts) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  } else if (loadingProductsError) {
    content = <div>Error fetching data...</div>;
  } else {
    content = data.map((product) => {
      return <ProductDetails key={product.id} product={product} />;
    });
  }

  return (
    <div className="bg-gray-100 rounded">
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl font-bold">Product List</h1>
        <Button className="rounded outline" loading={isCreatingProduct} onClick={handleProductAdd}>
          + Add Product
        </Button>
        {creatingProductError && 'Error creating product...'}
      </div>
      {content}
    </div>
  );
}

export default ProductsList;
