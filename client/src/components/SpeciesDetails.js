import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSpeciesDetails } from '../services/api';
import './Details.css';

const SpeciesDetails = () => {
  const { id } = useParams();
  const [species, setSpecies] = useState(null);

  useEffect(() => {
    const getSpeciesDetails = async () => {
      try {
        const data = await fetchSpeciesDetails(id);
        setSpecies(data);
      } catch (error) {
        console.error('Error fetching species details:', error);
      }
    };

    getSpeciesDetails();
  }, [id]);

  if (!species) {
    return <div>Loading...</div>;
  }

  return (
    <div className="details-container">
      <h1>{species.name}</h1>
      <p>Classification: {species.classification}</p>
      <p>Designation: {species.designation}</p>
      <p>Average Height: {species.average_height}</p>
      <p>Skin Colors: {species.skin_colors}</p>
      <p>Hair Colors: {species.hair_colors}</p>
      <p>Eye Colors: {species.eye_colors}</p>
      <p>Average Lifespan: {species.average_lifespan}</p>
      <p>Language: {species.language}</p>
    </div>
  );
};

export default SpeciesDetails;
