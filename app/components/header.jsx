import { Link } from 'remix';
import { Nav, links as navLinks } from './nav';
import headerStyles from '~/styles/components/header.css';

export let links = () => [
  ...navLinks(),
  { rel: 'stylesheet', href: headerStyles },
];

export let Header = () => {
  return (
    <header className="header">
      <div className="bar">
        <h1 className="logo">
          <Link to="/">Sick Fits</Link>
        </h1>
        <Nav />
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
    </header>
  );
};
