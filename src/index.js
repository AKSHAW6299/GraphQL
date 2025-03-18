// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


// 1) ApolloClient: Manages GraphQL requests and caching data.
// 2) InMemoryCache: Caches GraphQL query results in memory for faster performance.
// 3) ApolloProvider: Provides Apollo Client to your entire React app through React context.
const client = new ApolloClient({
  uri: 'https://graphql-pokemon2.vercel.app', // Example public GraphQL API
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
