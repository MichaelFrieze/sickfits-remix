import { Link } from 'remix';
import formatMoney from '~/utils/formatMoney';

export default function Product({ product }) {
  return (
    <div className="item">
      <img
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product.name}
      />
      <h3 className="title">
        <Link to={`/product/${product.id}`}>{product.name}</Link>
      </h3>
      <span className="price-tag">{formatMoney(product.price)}</span>
      <p>{product.description}</p>
      {/* TODO: Add buttons to edit and delte item */}
    </div>
  );
}
