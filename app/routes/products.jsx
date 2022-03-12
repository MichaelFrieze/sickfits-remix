import { useLoaderData, useCatch } from 'remix';
import { graphqlClient } from '~/utils/graphql-client';
import gql from 'graphql-tag';
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

export let loader = async () => {
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

  let queryResults = await graphqlClient.query({ query: ALL_PRODUCTS_QUERY });

  if (!queryResults) {
    throw new Response('No query results found', {
      status: 404,
    });
  }

  return queryResults;
};

export default function ProductsRoute() {
  let queryResults = useLoaderData();
  let data = queryResults.data;

  return (
    <div>
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
