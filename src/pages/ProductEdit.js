import { useState} from 'react';
import useProductsContext from '../hooks/use-products-context';
import Button from '../components/Button';

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
    <form onSubmit={handleSubmit} className="p-0">
      <div className="flex flex-col mb-6 md:w-full">
          <label className="mb-2 font-bold text-lg text-grey-darkest">Name</label>
          <input className="border rounded py-2 px-3 text-grey-darkest bg-gray-100" value={name} onChange={handleChange} />
        </div>
        <Button
          secondary
          rounded
          className="mx-auto"
        >
          Save
        </Button>
    </form>
  );
}

export default ProductEdit;
