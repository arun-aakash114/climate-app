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
    <form onSubmit={handleSubmit} className='submit_button'>
      <TextField
        label="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <br></br>
      <div className='search'>
      <Button   type="submit" variant="contained" color="primary">
        Search
      </Button>
      </div>
    </form>
  );
};

export default SearchBar;
