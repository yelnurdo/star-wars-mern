// star-wars-mern/client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PeopleList from './components/PeopleList';
import FilmsList from './components/FilmsList';
import StarshipsList from './components/StarshipsList';
import VehiclesList from './components/VehiclesList';
import SpeciesList from './components/SpeciesList';
import PlanetsList from './components/PlanetsList';
import SearchPage from './components/SearchPage';
import CharacterDetails from './components/CharacterDetails';
import FilmDetails from './components/FilmDetails';
import StarshipDetails from './components/StarshipDetails';
import VehicleDetails from './components/VehicleDetails';
import SpeciesDetails from './components/SpeciesDetails';
import PlanetDetails from './components/PlanetDetails';
import './App.css';

const App = () => (
  <Router>
    <div>
      <nav className="navbar">
        <div>
          <Link to="/">Star Wars Database</Link>
        </div>
        <div>
          <Link to="/people">People</Link>
          <Link to="/films">Films</Link>
          <Link to="/starships">Starships</Link>
          <Link to="/vehicles">Vehicles</Link>
          <Link to="/species">Species</Link>
          <Link to="/planets">Planets</Link>
          <Link to="/search">Search</Link>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<PeopleList />} />
          <Route path="/people" element={<PeopleList />} />
          <Route path="/films" element={<FilmsList />} />
          <Route path="/starships" element={<StarshipsList />} />
          <Route path="/vehicles" element={<VehiclesList />} />
          <Route path="/species" element={<SpeciesList />} />
          <Route path="/planets" element={<PlanetsList />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/people/:id" element={<CharacterDetails />} />
          <Route path="/films/:id" element={<FilmDetails />} />
          <Route path="/starships/:id" element={<StarshipDetails />} />
          <Route path="/vehicles/:id" element={<VehicleDetails />} />
          <Route path="/species/:id" element={<SpeciesDetails />} />
          <Route path="/planets/:id" element={<PlanetDetails />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
