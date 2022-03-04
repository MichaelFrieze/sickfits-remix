import { useLoaderData, json, Link } from 'remix';
import { gql } from 'graphql-request';
import Products from '~/components/products';
import productStyles from '~/styles/products.css';
import { client } from '~/utils/graphql-client';

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

const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    allProducts {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export let loader = async () => {
  const data = await client.request(ALL_PRODUCTS_QUERY);
  return data;
};

export default function ProductsRoute() {
  let data = useLoaderData();

  return (
    <div>
      <p>just returning some data:</p>
      <Products data={data} />
    </div>
  );
}
