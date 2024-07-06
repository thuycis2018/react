import ProductDetails from './ProductDetails';

function ProductList({ products, onDelete, onEdit }) {
  const renderedProducts = products.map((product) => {
    return (
      <ProductDetails onEdit={onEdit} onDelete={onDelete} key={product.id} product={product} />
    );
  });

  return <div className="product-list">{renderedProducts}</div>;
}

export default ProductList;
