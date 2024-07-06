import { useState } from 'react';
import ProductEdit from './ProductEdit';

function ProductDetails({ product, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(product.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  let content = <h3>{product.title}</h3>;
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
