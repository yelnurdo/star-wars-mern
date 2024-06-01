// starwars-mern/client/src/components/SearchResults.js
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { searchCategory } from '../services/api';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResults = () => {
  const query = useQuery();
  const category = query.get('category');
  const name = query.get('name');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const data = await searchCategory(category, name);
        setResults(data.results);
      } catch (error) {
        console.error(`Error fetching search results for ${category}:`, error);
      }
    };
    if (name) {
      fetchResults();
    }
  }, [category, name]);

  if (!name) {
    return <div>Please enter a search term.</div>;
  }

  return (
    <div>
      <h1>Search Results for {category}</h1>
      <ul>
        {results.map(result => (
          <li key={result.name || result.title}>
            <Link to={`/${category}/${result.url.split('/').slice(-2, -1)[0]}`}>
              {result.name || result.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
