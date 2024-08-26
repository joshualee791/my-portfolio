// lib/apollo-client.js
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://joshuag76.sg-host.com/graphql", // Replace with your actual GraphQL endpoint
  cache: new InMemoryCache(),
});

// Reset the cache (for debugging purposes)
client.cache.reset();

export default client;
