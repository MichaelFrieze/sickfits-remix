import { Product, links as productStyles } from './product';
import productsStyles from '~/styles/components/products.css';

export let links = () => [
  ...productStyles(),
  { rel: 'stylesheet', href: productsStyles },
];

export let Products = ({ data }) => {
  return (
    <div>
      <div className="products-list">
        {data.allProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
