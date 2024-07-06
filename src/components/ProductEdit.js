import { useState } from 'react';

function ProductEdit({ product, onSubmit }) {
  const [title, setTitle] = useState(product.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(product.id, title);
  };

  return (
    <form onSubmit={handleSubmit} className="product-edit">
      <label>Product Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary">SAVE</button>
    </form>
  );
}

export default ProductEdit;
