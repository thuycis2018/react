import { GoTrashcan } from 'react-icons/go';
import { removeProduct } from '../../store';
import { useThunk } from '../../hooks/use-thunk';
import Button from '../common/Button';

function ProductDetails({ product }) {
  const [doRemoveProduct, isLoading, error] = useThunk(removeProduct);

  const handleClick = () => {
    doRemoveProduct(product);
  };

  return (
    <div className="flex flex-row p-5 border bg-white mb-5">
      <Button className="mr-3 hover:bg-gray-200" loading={isLoading} onClick={handleClick}>
        <GoTrashcan />
      </Button>
      {error && <div>Error deleting product.</div>}
      {product.name}
    </div>
  );

  //return (header);
}

export default ProductDetails;
