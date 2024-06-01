// star-wars-mern/client/src/components/CharacterDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharacterDetails } from '../services/api';
import './Details.css';

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const getCharacterDetails = async () => {
      try {
        const data = await fetchCharacterDetails(id);
        setCharacter(data);
      } catch (error) {
        console.error('Error fetching character details:', error);
      }
    };

    getCharacterDetails();
  }, [id]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className="details-container">
      <h1>{character.name}</h1>
      <p>Height: {character.height}</p>
      <p>Mass: {character.mass}</p>
      <p>Hair Color: {character.hair_color}</p>
      <p>Skin Color: {character.skin_color}</p>
      <p>Eye Color: {character.eye_color}</p>
      <p>Birth Year: {character.birth_year}</p>
      <p>Gender: {character.gender}</p>
    </div>
  );
};

export default CharacterDetails;
