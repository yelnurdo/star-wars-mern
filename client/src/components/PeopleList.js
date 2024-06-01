// starwars-mern/client/src/components/PeopleList.js
import React, { useEffect, useState } from 'react';
import { fetchPeople } from '../services/api';

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
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleList;
