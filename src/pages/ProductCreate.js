import { useState } from 'react';
import useProductsContext from '../hooks/use-products-context';
import { GoPlus } from 'react-icons/go';
import Button from '../components/Button';
import Panel from '../components/Panel';

function ProductCreate() {
  const [name, setName] = useState('');
  const { createProduct} = useProductsContext();

  const handleChange = (event) => {
    if (event.target.value){
      setName(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createProduct(name);
    setName('');
  };

  return (
    <div>
      <Panel  className="bg-white rounded shadow-lg p-8 m-5 mx-auto w-5/12">      
      <form onSubmit={handleSubmit}>
        <div className="uppercase text-center">Add a Product</div>
        <div className="flex flex-col mb-6 md:w-full">
          <label className="mb-2 uppercase font-bold text-lg text-grey-darkest">Name</label>
          <input className="border rounded py-2 px-3 text-grey-darkest bg-gray-100" value={name} onChange={handleChange} />
        </div>
        <Button
          primary
          rounded
          className="uppercase mx-auto"
        >
          <GoPlus />
          Add
        </Button>
      </form>
      </Panel>
    </div>
  );
}

export default ProductCreate;
