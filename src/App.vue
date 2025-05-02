<script setup lang="ts">
import Header from "@/components/Header.vue";
import ForecastView from "@/views/ForecastView.vue";

import { useWeatherData } from "@/composables/useWeatherData";
import { CITY_LIST } from "@/constants/cities";
import debounce from "lodash.debounce";

import { ref, onBeforeUnmount } from "vue";

const activeCity = ref<City>(CITY_LIST[2]);

const { fetchForCity, hourlyData, dailySummaries, loading, error } =
  useWeatherData();

const onRefresh = debounce(
  () => {
    fetchForCity(activeCity.value);
  },
  500,
  { leading: true, trailing: false }
);

fetchForCity(activeCity.value);

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
</template>
