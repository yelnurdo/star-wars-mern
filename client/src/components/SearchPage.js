// star-wars-mern/client/src/components/SearchPage.js
import React, { useState } from 'react';
import { searchCategory } from '../services/api';
import { Link } from 'react-router-dom';
import './SearchPage.css'; // Add this line to import component-specific styles if any

const SearchPage = () => {
  const [category, setCategory] = useState('people');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (query.trim()) {
      try {
        const data = await searchCategory(category, query);
        setResults(data.results);
      } catch (error) {
        console.error(`Error searching ${category}:`, error);
      }
    }
  };

  return (
    <div className="search-page-container">
      <h1>Search Star Wars Database</h1>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="people">People</option>
        <option value="films">Films</option>
        <option value="starships">Starships</option>
        <option value="vehicles">Vehicles</option>
        <option value="species">Species</option>
        <option value="planets">Planets</option>
      </select>
      <input
        type="text"
        placeholder="Search by name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {results.length > 0 && (
        <div className="search-results">
          <h2>Search Results</h2>
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
      )}
    </div>
  );
};

export default SearchPage;
