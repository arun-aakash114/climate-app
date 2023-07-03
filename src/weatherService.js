// weatherService.js
export const getWeatherData = async (location) => {
  const API_KEY = 'b6c2eaa7425489c98267cea9eb66a73a';

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
