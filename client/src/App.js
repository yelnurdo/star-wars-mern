// starwars-mern/client/src/App.js
import React from 'react';
import PeopleList from './components/PeopleList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PeopleList />
      </header>
    </div>
  );
}

export default App;
