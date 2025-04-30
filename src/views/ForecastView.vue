<script setup lang="ts">
import { ref } from "vue";
import { Tabs } from "@/components/Tabs.vue";
import { City, CITY_LIST } from "@/constants/cityList";

const activeCity = ref<City>(CITY_LIST[0]);

const handleCitySelect = (city: City) => {
  activeCity.value = city;
  // TBD: Add logic to fetch weather data for the selected city
};
</script>

<template>
  <div>
    <!-- Tabs will be added here -->
    <Tabs :cities="CITY_LIST" :active="activeCity" @select="handleCitySelect" />

    <!-- Hourly Forecast Section -->
  </div>
</template>
