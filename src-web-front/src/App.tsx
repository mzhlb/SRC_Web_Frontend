// src/App.tsx
import React from 'react';
import Games from './components/Games';
import Cards from './components/Cards';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Game and Card Management</h1>
      <Games />
      <Cards />
    </div>
  );
};

export default App;
