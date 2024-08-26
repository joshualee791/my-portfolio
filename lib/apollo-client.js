// lib/apollo-client.js
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://joshuag76.sg-host.com/graphql", // Ensure this URI is correct and accessible
  cache: new InMemoryCache(),
});

export default client;
