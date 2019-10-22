import { NormalizedCacheObject } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';

export interface ZachCacheShape extends NormalizedCacheObject {}

export type ZachApolloClient = ApolloClient<ZachCacheShape>;
