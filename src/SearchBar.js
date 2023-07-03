import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(location);
    setLocation('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
