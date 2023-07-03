import React, { useState } from 'react';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';
import WeatherChart from './WeatherChart';

const App = () => {
  const [location, setLocation] = useState(null);

  const handleSearch = (location) => {
    setLocation(location);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {location && (
        <div>
          <WeatherCard location={location} />
          <WeatherChart location={location} />
        </div>
      )}
    </div>
  );
};

export default App;
