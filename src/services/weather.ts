import axios from "axios";

import type { City } from "@/constants/cities";
import type { ForecastData } from "@/types/weatherTypes";

const API_URL_BASE = "https://api.openweathermap.org/data/2.5/forecast";
console.log("🔑 API_KEY:", import.meta.env.VITE_API_KEY);
export const getWeather = async (city: City): Promise<ForecastData> => {
  const API_KEY = import.meta.env.VITE_API_KEY;

  if (!API_KEY) {
    throw new Error("Missing OpenWeather API key");
  }

  const q = `${city.name},${city.country}`;
  const url = `${API_URL_BASE}?q=${encodeURIComponent(
    q
  )}&appid=${API_KEY}&units=metric`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    console.error("Error fetching weather data:", err);
    if (axios.isAxiosError(err) && err.response?.data?.message) {
      throw new Error(err.response.data.message);
    }
    throw new Error("Failed to fetch weather data");
  }
};
