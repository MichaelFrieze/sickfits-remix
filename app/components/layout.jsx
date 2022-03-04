import Header from './header';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <h2>I am the layout component</h2>
      <div className="inner">{children}</div>
    </div>
  );
}
