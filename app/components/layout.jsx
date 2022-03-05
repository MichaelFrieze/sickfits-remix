import { Header, links as headerLinks } from './header';
import layoutStyles from '~/styles/components/layout.css';

export let links = () => [
  ...headerLinks(),
  { rel: 'stylesheet', href: layoutStyles },
];

export let Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <h2>I am the layout component</h2>
      <div className="inner">{children}</div>
    </div>
  );
};
