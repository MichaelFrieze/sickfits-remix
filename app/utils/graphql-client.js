import { GraphQLClient } from 'graphql-request';
import { endpoint } from './config';

export const client = new GraphQLClient(endpoint);
