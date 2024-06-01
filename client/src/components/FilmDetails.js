// star-wars-mern/client/src/components/FilmDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFilmDetails } from '../services/api';
import './Details.css';

const FilmDetails = () => {
  const { id } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    const getFilmDetails = async () => {
      try {
        const data = await fetchFilmDetails(id);
        setFilm(data);
      } catch (error) {
        console.error('Error fetching film details:', error);
      }
    };

    getFilmDetails();
  }, [id]);

  if (!film) {
    return <div>Loading...</div>;
  }

  return (
    <div className="details-container">
      <h1>{film.title}</h1>
      <p>Director: {film.director}</p>
      <p>Producer: {film.producer}</p>
      <p>Release Date: {film.release_date}</p>
      <p>Opening Crawl: {film.opening_crawl}</p>
    </div>
  );
};

export default FilmDetails;
