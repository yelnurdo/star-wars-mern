import React, { useEffect, useState } from 'react';
import { fetchVehicles } from '../services/api';
import { Link } from 'react-router-dom';

const VehiclesList = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const getVehicles = async () => {
      try {
        const data = await fetchVehicles();
        setVehicles(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    getVehicles();
  }, []);

  return (
    <div>
      <h1>Star Wars Vehicles</h1>
      <ul>
        {vehicles.map(vehicle => (
          <li key={vehicle.name}>
            <Link to={`/vehicles/${vehicle.url.split('/').slice(-2, -1)[0]}`}>{vehicle.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehiclesList;
