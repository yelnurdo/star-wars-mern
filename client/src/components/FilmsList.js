// starwars-mern/client/src/components/FilmsList.js
import React, { useEffect, useState } from 'react';
import { fetchFilms } from '../services/api';
import { Link } from 'react-router-dom';

const FilmsList = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const getFilms = async () => {
      try {
        const data = await fetchFilms();
        setFilms(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    getFilms();
  }, []);

  return (
    <div>
      <h1>Star Wars Films</h1>
      <ul>
        {films.map(film => (
          <li key={film.title}>
            <Link to={`/films/${film.url.split('/').slice(-2, -1)[0]}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilmsList;
