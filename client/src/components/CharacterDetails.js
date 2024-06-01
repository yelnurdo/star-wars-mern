import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharacterDetails } from '../services/api';
import AuthContext from '../context/AuthContext';
import api from '../utils/api';
import './Details.css';

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const { auth } = useContext(AuthContext);

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

  const handleAddFavorite = async () => {
    if (!auth.user) {
      alert('You must be logged in to add favorites');
      return;
    }
    try {
      await api.post('/favorites', { itemId: id });
      alert('Added to favorites');
    } catch (error) {
      console.error('Error adding to favorites:', error);
    }
  };

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
      {auth.user && <button onClick={handleAddFavorite}>Add to Favorites</button>}
    </div>
  );
};

export default CharacterDetails;
