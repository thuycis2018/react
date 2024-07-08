import { useState } from 'react';
import useProductsContext from '../hooks/use-products-context';

function ProductCreate() {
  const [name, setName] = useState('');
  const { createProduct} = useProductsContext();

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createProduct(name);
    setName('');
  };

  return (
    <div className="product-create">
      <h3>Add a Product</h3>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input className="input" value={name} onChange={handleChange} />
        <button className="button">ADD</button>
      </form>
    </div>
  );
}

export default ProductCreate;
