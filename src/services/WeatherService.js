import axios from 'axios';

const API_KEY = '1034f20414a780ad33f80a0fca6c250d';
const BASE_URL = 'https://api.openweathermap.org/data/3.0/onecall';

export async function getWeather(lat, lon) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        lat,
        lon,
        appid: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
}
