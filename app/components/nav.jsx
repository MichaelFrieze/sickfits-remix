import { Link } from 'remix';

export default function Nav() {
  return (
    <nav>
      <Link to="/products">Products</Link>
      <Link to="/sell">Sell</Link>
      <Link to="/orders">Orders</Link>
      <Link to="/account">Account</Link>
    </nav>
  );
}
