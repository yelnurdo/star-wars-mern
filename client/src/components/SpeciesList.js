// starwars-mern/client/src/components/SpeciesList.js
import React, { useEffect, useState } from 'react';
import { fetchSpecies } from '../services/api';
import { Link } from 'react-router-dom';

const SpeciesList = () => {
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    const getSpecies = async () => {
      try {
        const data = await fetchSpecies();
        setSpecies(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    getSpecies();
  }, []);

  return (
    <div>
      <h1>Star Wars Species</h1>
      <ul>
        {species.map(species => (
          <li key={species.name}>
            <Link to={`/species/${species.url.split('/').slice(-2, -1)[0]}`}>{species.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpeciesList;
