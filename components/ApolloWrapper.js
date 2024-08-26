// components/ApolloWrapper.js
"use client";

import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo-client";

const ApolloWrapper = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloWrapper;
