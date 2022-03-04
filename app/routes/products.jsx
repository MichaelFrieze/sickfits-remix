import { useLoaderData } from 'remix';
import Products from '~/components/products';
import productStyles from '~/styles/products.css';

export let links = () => {
  return [
    {
      rel: 'stylesheet',
      href: productStyles,
    },
  ];
};

export let meta = () => {
  return {
    title: 'Sick Fits | Products',
    description: 'Using GraphQL to get products!',
  };
};

export { loader } from '~/routes/api/products';

export default function ProductsRoute() {
  let data = useLoaderData();

  return (
    <div>
      <p>just returning some data:</p>
      <Products data={data} />
    </div>
  );
}
