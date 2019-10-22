import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { ZachCacheShape, ZachApolloClient } from './types';
import { setContext } from 'apollo-link-context';

let apolloClient: ZachApolloClient;

interface CreateApolloClientOptions {
  serverUrl: string;
  // We pass a function to fetch tokens for maximum cross-platform flexibility
  getToken?: () => string;
  fetch?: WindowOrWorkerGlobalScope['fetch'];
}

function createApolloClient(initialState: ZachCacheShape = {}, options: CreateApolloClientOptions) {
  const { serverUrl, getToken } = options;
  const fetchOptions = {};

  const httpLink = new HttpLink({
    uri: serverUrl, // Server URL (must be absolute)
    credentials: 'same-origin',
    fetch,
    fetchOptions
  });

  const authLink = setContext((_request, { headers }) => {
    const token = getToken ? getToken() : undefined;
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      }
    }
  });

  const cache = new InMemoryCache();

  return new ApolloClient({
    ssrMode: typeof window === 'undefined', // Disables forceFetch on the server (so queries are only run once)
    link: authLink.concat(httpLink),
    cache: cache.restore(initialState),
  })


}

export interface InitApolloOptions extends CreateApolloClientOptions {
  initialState?: ZachCacheShape;
}

export function initApollo(options: InitApolloOptions) {
  if (!apolloClient) {
    const { initialState, ...restOpts } = options;
    apolloClient = createApolloClient(initialState, restOpts);
  }
  return apolloClient;
}
