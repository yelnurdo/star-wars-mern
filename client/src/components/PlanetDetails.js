// star-wars-mern/client/src/components/PlanetDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPlanetDetails } from '../services/api';
import './Details.css';

const PlanetDetails = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    const getPlanetDetails = async () => {
      try {
        const data = await fetchPlanetDetails(id);
        setPlanet(data);
      } catch (error) {
        console.error('Error fetching planet details:', error);
      }
    };

    getPlanetDetails();
  }, [id]);

  if (!planet) {
    return <div>Loading...</div>;
  }

  return (
    <div className="details-container">
      <h1>{planet.name}</h1>
      <p>Climate: {planet.climate}</p>
      <p>Diameter: {planet.diameter}</p>
      <p>Gravity: {planet.gravity}</p>
      <p>Orbital Period: {planet.orbital_period}</p>
      <p>Population: {planet.population}</p>
      <p>Rotation Period: {planet.rotation_period}</p>
      <p>Surface Water: {planet.surface_water}</p>
      <p>Terrain: {planet.terrain}</p>
    </div>
  );
};

export default PlanetDetails;
