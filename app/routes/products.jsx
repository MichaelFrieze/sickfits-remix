import Products from '~/components/products';

import itemStyles from '~/styles/item.css';
import priceTagStyles from '~/styles/price-tag.css';
import titleStyles from '~/styles/title.css';

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: itemStyles,
    },
    {
      rel: 'stylesheet',
      href: priceTagStyles,
    },
    {
      rel: 'stylesheet',
      href: titleStyles,
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
