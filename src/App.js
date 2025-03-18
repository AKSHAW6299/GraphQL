// src/App.js
import React from 'react';
import { gql, useQuery } from '@apollo/client';

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
  const { loading, error, data } = useQuery(GET_POKEMONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Pokemons List:</h1>
      {data.pokemons.map(({ id, name, image }) => (
        <div key={id}>
          <h3>{name}</h3>
          <img src={image} alt={name} width={100} />
        </div>
      ))}
    </div>
  );
};

export default App;
