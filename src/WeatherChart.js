import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const WeatherChart = ({ location }) => {
  const [hourlyForecast, setHourlyForecast] = useState(null);

  useEffect(() => {
    // Fetch hourly forecast data based on location
    // const fetchHourlyForecast = async () => {
    //   // Call your API to fetch hourly forecast data based on the location
    //   // const data = await yourWeatherAPI.getHourlyForecast(location);
    //   // setHourlyForecast(data);
    // };
    // fetchHourlyForecast();

    // Temporary dummy data
    const data = [
      {
        time: '10:00 AM',
        temperature: 28,
        chanceOfPrecipitation: 0,
      },
      {
        time: '11:00 AM',
        temperature: 30,
        chanceOfPrecipitation: 5,
      },
      // Add more hourly forecast data
    ];
    setHourlyForecast(data);
  }, [location]);

  if (!hourlyForecast) {
    return <div>Loading...</div>;
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Hourly Forecast for {location}
        </Typography>
        {hourlyForecast.map((forecast) => (
          <div key={forecast.time}>
            <Typography variant="h6" component="div">
              Time: {forecast.time}
            </Typography>
            <Typography variant="body1" component="div">
              Temperature: {forecast.temperature}°C
            </Typography>
            <Typography variant="body2" component="div">
              Chance of Precipitation: {forecast.chanceOfPrecipitation}%
            </Typography>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default WeatherChart;
