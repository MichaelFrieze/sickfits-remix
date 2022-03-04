import { gql } from 'graphql-request';
import { client } from '~/utils/graphql-client';

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

  return data;
};
