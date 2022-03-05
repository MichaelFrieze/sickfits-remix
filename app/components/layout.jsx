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
      <div className="inner">{children}</div>
    </div>
  );
};
