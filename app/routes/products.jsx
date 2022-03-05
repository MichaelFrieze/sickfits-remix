import { useLoaderData, useCatch } from 'remix';
import { gql } from 'graphql-request';
import { client } from '~/utils/graphql-client';
import { Products, links as productsStyles } from '~/components/products';

export let links = () => {
  return [...productsStyles()];
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
  let data = await client.request(ALL_PRODUCTS_QUERY);

  if (!data) {
    throw new Response('No data found', {
      status: 404,
    });
  }

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

export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 404) {
    return (
      <>
        <div className="error">
          There is no data from the keystone back end to display.
        </div>
        <div className="error">{caught.data}</div>
      </>
    );
  }
  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}

export function ErrorBoundary() {
  return <div className="error">I did a whoopsies.</div>;
}
