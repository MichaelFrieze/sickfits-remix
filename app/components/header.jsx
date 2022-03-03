import { Link } from 'remix';
import Nav from './nav';

export default function Header() {
  return (
    <header className="header">
      <div className="bar">
        <h1 className="logo">
          <Link to="/">Sick Fits</Link>
        </h1>
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <Nav />
    </header>
  );
}
