import SortableTable from '../components/SortableTable';
import useProductsContext from '../hooks/use-products-context';

function ProductPage() {
  const { products} = useProductsContext();

  const config = [
    {
      label: 'Name',
      render: (product) => product.name,
      sortValue: (product) => product.name,
    },
    {
      label: 'Price',
      render: (product) => `$${product.price}`,
      sortValue: (product) => product.price,
    },
    {
      label: 'Category',
      render: (product) => product.category,
      sortValue: (product) => product.category,
    },
  ];

  const sortByField = (product) => {
    return product.name;
  };

  return (
    <div>
      <SortableTable data={products} config={config} sortByField={sortByField} />
    </div>
  );
}

export default ProductPage;
