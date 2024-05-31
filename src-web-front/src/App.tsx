// src/App.tsx
import React from 'react';
import Games from './components/Games';
import Cards from './components/Cards';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-100 py-10">
      <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">Game and Card Management</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Games</h2>
            <Games />
          </div>
          <div className="bg-blue-50 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Cards</h2>
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
