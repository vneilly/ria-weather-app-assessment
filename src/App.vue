<script setup lang="ts">
import Header from "@/components/Header.vue";
import ForecastView from "@/views/ForecastView.vue";

import { useWeatherData } from "@/composables/useWeatherData";
import { CITY_LIST } from "@/constants/cities";
import debounce from "lodash.debounce";

import { ref, onBeforeUnmount, onMounted } from "vue";

const activeCity = ref<City>(CITY_LIST[2]);

const { fetchForCity, hourlyData, dailySummaries, loading, error } =
  useWeatherData();

const lastUpdated = ref<Date | null>(null);

const onRefresh = debounce(
  async () => {
    await fetchForCity(activeCity.value);
    lastUpdated.value = new Date();
  },
  500,
  { leading: true, trailing: false }
);

// Fetch data for the active city when the component is mounted
// and set the last updated time
onMounted(() => {
  fetchForCity(activeCity.value);
  lastUpdated.value = new Date();
});

onBeforeUnmount(() => {
  onRefresh.cancel();
});

const onCitySelect = (city: City) => {
  activeCity.value = city;
  fetchForCity(city);
};
</script>

<template>
  <!-- App Header -->
  <Header @refresh="onRefresh" />

  <!-- Main Content -->
  <main class="container mx-auto px-4 pt-16">
    <ForecastView
      :active-city="activeCity"
      :hourly-data="hourlyData"
      :daily-summaries="dailySummaries"
      :loading="loading"
      :error="error"
    />
  </main>
  <footer class="text-right text-white text-sm mt-4 bg-headerBg">
    <span v-if="lastUpdated"
      >Last updated: {{ lastUpdated.toLocaleTimeString() }}</span
    >
  </footer>
</template>
