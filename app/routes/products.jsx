import Products from '~/components/products';

import productStyles from '~/styles/products.css';

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: productStyles,
    },
  ];
};

export default function ProductsRoute() {
  return (
    <div>
      <Products />
    </div>
  );
}
