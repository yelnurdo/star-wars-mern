// star-wars-mern/client/src/components/StarshipDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchStarshipDetails } from '../services/api';
import './Details.css';

const StarshipDetails = () => {
  const { id } = useParams();
  const [starship, setStarship] = useState(null);

  useEffect(() => {
    const getStarshipDetails = async () => {
      try {
        const data = await fetchStarshipDetails(id);
        setStarship(data);
      } catch (error) {
        console.error('Error fetching starship details:', error);
      }
    };

    getStarshipDetails();
  }, [id]);

  if (!starship) {
    return <div>Loading...</div>;
  }

  return (
    <div className="details-container">
      <h1>{starship.name}</h1>
      <p>Model: {starship.model}</p>
      <p>Manufacturer: {starship.manufacturer}</p>
      <p>Cost in Credits: {starship.cost_in_credits}</p>
      <p>Length: {starship.length}</p>
      <p>Max Atmosphering Speed: {starship.max_atmosphering_speed}</p>
      <p>Crew: {starship.crew}</p>
      <p>Passengers: {starship.passengers}</p>
      <p>Cargo Capacity: {starship.cargo_capacity}</p>
      <p>Consumables: {starship.consumables}</p>
      <p>Hyperdrive Rating: {starship.hyperdrive_rating}</p>
      <p>MGLT: {starship.MGLT}</p>
      <p>Starship Class: {starship.starship_class}</p>
    </div>
  );
};

export default StarshipDetails;
