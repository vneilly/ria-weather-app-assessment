/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  safelist: [
    "bg-weather-sunny",
    "bg-weather-cloudy",
    "bg-weather-rainy",
    "bg-weather-stormy",
    "bg-weather-snowy",
    "bg-weather-windy",
    "bg-weather-foggy",
    "text-textPrimary",
    "text-textSecondary",
    "text-accent",
    "bg-headerBg",
  ],
  theme: {
    extend: {
      colors: {
        textPrimary: "#1B1B1B",
        textSecondary: "#808080",
        accent: "#7EC6DF",
        headerBg: "#3C64AB",
      },
      backgroundImage: {
        "weather-sunny": "linear-gradient(to top, #fddb92 0%, #d1fdff 100%)",
        "weather-cloudy": "linear-gradient(to top, #d7d2cc 0%, #304352 100%)",
        "weather-rainy": "linear-gradient(to top, #485563 0%, #29323c 100%)",
        "weather-stormy": "linear-gradient(to top, #00c6fb 0%, #005bea 100%)",
        "weather-snowy": "linear-gradient(to top, #e6dada 0%, #274046 100%)",
        "weather-windy": "linear-gradient(to top, #f8cdda 0%, #1d2b64 100%)",
        "weather-foggy": "linear-gradient(to top, #d3cce3 0%, #e9e4f0 100%)",
      },
    },
  },
  plugins: [],
};
