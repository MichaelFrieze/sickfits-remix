import { Link } from 'remix';
import navStyles from '~/styles/components/nav.css';

export let links = () => [{ rel: 'stylesheet', href: navStyles }];

export let Nav = () => {
  return (
    <ul className="nav">
      <Link to="/products">Products</Link>
      <Link to="/sell">Sell</Link>
      <Link to="/orders">Orders</Link>
      <Link to="/account">Account</Link>
    </ul>
  );
};
