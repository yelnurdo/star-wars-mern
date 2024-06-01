import React, { useEffect, useState } from 'react';
import { fetchPeople } from '../services/api';
import { Link } from 'react-router-dom';

const PeopleList = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const getPeople = async () => {
      try {
        const data = await fetchPeople();
        setPeople(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    getPeople();
  }, []);

  return (
    <div>
      <h1>Star Wars Characters</h1>
      <ul>
        {people.map(person => (
          <li key={person.name}>
            <Link to={`/people/${person.url.split('/').slice(-2, -1)[0]}`}>{person.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleList;
