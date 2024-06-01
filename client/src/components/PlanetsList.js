// starwars-mern/client/src/components/PlanetsList.js
import React, { useEffect, useState } from 'react';
import { fetchPlanets } from '../services/api';
import { Link } from 'react-router-dom';

const PlanetsList = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      try {
        const data = await fetchPlanets();
        setPlanets(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    getPlanets();
  }, []);

  return (
    <div>
      <h1>Star Wars Planets</h1>
      <ul>
        {planets.map(planet => (
          <li key={planet.name}>
            <Link to={`/planets/${planet.url.split('/').slice(-2, -1)[0]}`}>{planet.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanetsList;
