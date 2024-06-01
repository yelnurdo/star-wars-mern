import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchVehicleDetails } from '../services/api';
import './Details.css';

const VehicleDetails = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    const getVehicleDetails = async () => {
      try {
        const data = await fetchVehicleDetails(id);
        setVehicle(data);
      } catch (error) {
        console.error('Error fetching vehicle details:', error);
      }
    };

    getVehicleDetails();
  }, [id]);

  if (!vehicle) {
    return <div>Loading...</div>;
  }

  return (
    <div className="details-container">
      <h1>{vehicle.name}</h1>
      <p>Model: {vehicle.model}</p>
      <p>Manufacturer: {vehicle.manufacturer}</p>
      <p>Cost in Credits: {vehicle.cost_in_credits}</p>
      <p>Length: {vehicle.length}</p>
      <p>Max Atmosphering Speed: {vehicle.max_atmosphering_speed}</p>
      <p>Crew: {vehicle.crew}</p>
      <p>Passengers: {vehicle.passengers}</p>
      <p>Cargo Capacity: {vehicle.cargo_capacity}</p>
      <p>Consumables: {vehicle.consumables}</p>
      <p>Vehicle Class: {vehicle.vehicle_class}</p>
    </div>
  );
};

export default VehicleDetails;
