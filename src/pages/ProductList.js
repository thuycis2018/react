import ProductDetails from './ProductDetails';
import useProductsContext from '../hooks/use-products-context';

function ProductList() {
  const { products} = useProductsContext();
  const renderedProducts = products.map((product) => {
    return (
      <ProductDetails key={product.id} product={product} />
    );
  });

  return <div className="product-list">{renderedProducts}</div>;
}

export default ProductList;
