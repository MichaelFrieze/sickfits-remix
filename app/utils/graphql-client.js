import { GraphQLClient } from 'graphql-request';
import { endpoint } from './config';

export const graphqlClient = new GraphQLClient(endpoint);
