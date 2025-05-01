<script setup lang="ts">
import { ref, onMounted } from "vue";
import Tabs from "@/components/Tabs.vue";
import { City, CITY_LIST } from "@/constants/cities";
import { getWeather } from "@/services/weather";

import HourlyForecast from "@/components/HourlyForecast.vue";
import type { HourlyViewProps } from "@/components/HourlyForecast.vue";

const activeCity = ref<City>(CITY_LIST[2]);

const hourlyData = ref<HourlyViewProps[]>([]);

const fetchWeatherData = async (city: City) => {
  try {
    const weatherData = await getWeather(city);
    console.log("Weather Data:", weatherData);
    if (!weatherData || !weatherData.list) {
      console.error("Invalid weather data format");
      return;
    }

    hourlyData.value = weatherData.list.slice(0, 12).map((hour) => ({
      temp: hour.main.temp,
      humidity: hour.main.humidity,
      icon: hour.weather[0].icon,
      time: new Date(hour.dt * 1000).toLocaleTimeString(undefined, {
        hour: "numeric",
        minute: "2-digit",
      }),
    }));

    console.log("Mapped Hourly Data:", hourlyData.value);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

const handleCitySelect = async (city: City) => {
  activeCity.value = city;
  await fetchWeatherData(city);
};

onMounted(async () => {
  await fetchWeatherData(activeCity.value);
});
</script>

<template>
  <div>
    <!-- Tabs will be added here -->
    <Tabs :cities="CITY_LIST" :active="activeCity" @select="handleCitySelect" />

    <!-- Hourly Forecast Section -->
    <div class="mt-6 text-gray-500">
      <h2 class="text-2xl font-bold">Hourly Forecast</h2>
      <p class="mt-2">Detailed hourly forecast for {{ activeCity.name }}</p>

      <!-- hourly forecast component here -->
      <div class="mt-4">
        <HourlyForecast :hours="hourlyData" />
      </div>
    </div>
  </div>
</template>
