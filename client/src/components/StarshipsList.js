import React, { useEffect, useState } from 'react';
import { fetchStarships } from '../services/api';
import { Link } from 'react-router-dom';

const StarshipsList = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const getStarships = async () => {
      try {
        const data = await fetchStarships();
        setStarships(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    getStarships();
  }, []);

  return (
    <div>
      <h1>Star Wars Starships</h1>
      <ul>
        {starships.map(starship => (
          <li key={starship.name}>
            <Link to={`/starships/${starship.url.split('/').slice(-2, -1)[0]}`}>{starship.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StarshipsList;
