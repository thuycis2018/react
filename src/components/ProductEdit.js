import { useState} from 'react';
import useProductsContext from '../hooks/use-products-context';

function ProductEdit({ product, onSubmit }) {
  const [name, setName] = useState(product.name);

  const { editProductById } = useProductsContext();

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    editProductById(product.id, name)
  };

  return (
    <form onSubmit={handleSubmit} className="product-edit">
      <label>Product Name</label>
      <input className="input" value={name} onChange={handleChange} />
      <button className="button is-primary">SAVE</button>
    </form>
  );
}

export default ProductEdit;
