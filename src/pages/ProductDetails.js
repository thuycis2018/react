import { useState } from 'react';
import { GoPencil, GoX } from 'react-icons/go';
import ProductEdit from './ProductEdit';
import useProductsContext from '../hooks/use-products-context';

function ProductDetails({ product }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteProductById } = useProductsContext();

  const handleDeleteClick = () => {
    deleteProductById(product.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = '';
  if (showEdit) {
    content = <ProductEdit onSubmit={handleSubmit} product={product} />;
  }

  return (
        <div className="relative inline-block">                      
            {showEdit || <img
            src={`https://picsum.photos/seed/${product.id}/300/200`}
            alt="products"
            className="block"
            />}
            
            <div className="absolute top-0 right-0 flex space-x-2 bg-gray-300 rounded-full p-1 m-2">
                <GoPencil onClick={handleEditClick} className="material-icons text-gray-500 cursor-pointer" />
                <GoX onClick={handleDeleteClick} className="material-icons text-gray-500 cursor-pointer" />
            </div>
            <div>{content}</div>
        </div>
  );
}

export default ProductDetails;
