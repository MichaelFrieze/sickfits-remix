import Product from './Product';

export default function Products({ props }) {
  let data = props;

  return (
    <div>
      <div className="products-list">
        {data.allProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
