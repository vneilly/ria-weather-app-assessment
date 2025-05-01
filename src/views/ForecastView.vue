<script setup lang="ts">
import { ref, onMounted } from "vue";
import Tabs from "@/components/Tabs.vue";
import { City, CITY_LIST } from "@/constants/cities";
import { getWeather } from "@/services/weather";

const activeCity = ref<City>(CITY_LIST[2]);

const fetchWeatherData = async (city: City) => {
  try {
    const weatherData = await getWeather(city);
    console.log("Weather data:", weatherData);
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
      <!-- Add hourly forecast component here -->
    </div>
  </div>
</template>
