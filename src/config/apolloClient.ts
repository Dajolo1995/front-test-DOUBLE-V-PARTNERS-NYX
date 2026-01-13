import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: import.meta.env.VITE_GRAPHQL_URL || 'http://localhost:3000/graphql',
    credentials: 'include',
  }),
  cache: new InMemoryCache(),
});
