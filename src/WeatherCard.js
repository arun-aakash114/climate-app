import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const WeatherCard = ({ location }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Fetch weather data based on location
    // const fetchWeatherData = async () => {
    //   // Call your API to fetch weather data based on the location
    //   // const data = await yourWeatherAPI.getWeatherData(location);
    //   // setWeatherData(data);
    // };
    // fetchWeatherData();

    // Temporary dummy data
    const data = {
      temperature: 25,
      weather: 'Sunny',
      description: 'Clear skies',
    };
    setWeatherData(data);
  }, [location]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <Card className='weather'>
      <CardContent >
        <Typography variant="h5" component="div">
          Current Weather for {location}
        </Typography>
        <Typography variant="h6" component="div">
          Temperature: {weatherData.temperature}°C
        </Typography>
        <Typography variant="body1" component="div">
          Weather: {weatherData.weather}
        </Typography>
        <Typography variant="body2" component="div">
          Description: {weatherData.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
