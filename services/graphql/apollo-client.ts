import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import withApollo from 'next-with-apollo';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';

const GRAPHQL_URL = 'https://api.graphql.jobs/';

const link = createHttpLink({
    fetch,
    uri: GRAPHQL_URL,
});

export default withApollo(
    ({ initialState }) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        new ApolloClient({
            link,
            cache: new InMemoryCache().restore(initialState || {}),
        }),
);
