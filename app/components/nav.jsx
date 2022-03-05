import { NavLink } from 'remix';
import navStyles from '~/styles/components/nav.css';

export let links = () => [{ rel: 'stylesheet', href: navStyles }];

export let Nav = () => {
  return (
    <ul className="nav">
      <NavLink prefetch="intent" to="/products">
        Products
      </NavLink>
      <NavLink prefetch="intent" to="/sell">
        Sell
      </NavLink>
      <NavLink prefetch="intent" to="/orders">
        Orders
      </NavLink>
      <NavLink prefetch="intent" to="/account">
        Account
      </NavLink>
    </ul>
  );
};
