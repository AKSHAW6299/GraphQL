// src/App.js
import React from 'react';
import { gql, useQuery } from '@apollo/client';

// Define your GraphQL query using the gql template literal from @apollo/client:
// This query requests data from the GraphQL server for a list of Pokémon.
// It specifies exactly which fields (id, number, name, image) you want for each Pokémon.
// The first: 10 argument limits the response to 10 Pokémon.
const GET_POKEMONS = gql`
  query GetPokemons {
    pokemons(first: 10) {
      id
      number
      name
      image
    }
  }
`;

const App = () => {

  // Use Apollo Client’s useQuery hook to execute the GraphQL query within your React component:
  const { loading, error, data } = useQuery(GET_POKEMONS);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-semibold text-gray-600">Loading...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-semibold text-red-600">Error: {error.message}</p>
      </div>
    );

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-8xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-semibold text-center mb-6 text-indigo-600">
          Using GrapgQL - Pokémon Gallery data
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {data.pokemons.map(({ id, name, image, number }) => (
            <div
              key={id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-200"
            >
              <img
                src={image}
                alt={name}
                className="w-full h-48 object-contain bg-gray-200"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
                <p className="text-gray-500">#{number}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
