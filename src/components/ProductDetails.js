import { useState } from 'react';
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

  let content = <h3>{product.name}</h3>;
  if (showEdit) {
    content = <ProductEdit onSubmit={handleSubmit} product={product} />;
  }

  return (
    <div className="product-show">
      <img alt="products" src={`https://picsum.photos/seed/${product.id}/300/200`} />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
