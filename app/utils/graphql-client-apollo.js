import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/link-error';
import { createUploadLink } from 'apollo-upload-client';
import { endpoint, prodEndpoint } from '~/utils/config.js';

export let graphqlClient = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      if (networkError)
        console.log(
          `[Network error]: ${networkError}. Backend is unreachable. Is it running?`
        );
    }),
    // this uses apollo-link-http under the hood, so all the options here come from that package
    createUploadLink({
      uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
      fetchOptions: {
        credentials: 'include',
      },
    }),
  ]),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          // TODO: We will add this together!
          // allProducts: paginationField(),
        },
      },
    },
  }),
  ssrMode: true,
});
