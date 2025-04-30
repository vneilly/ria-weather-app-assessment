<script setup lang="ts">
import { defineProps } from "vue";
import WeatherIcon from "./WeatherIcon.vue";

interface HourlyViewProps {
  time: string;
  temp: number;
  icon: string;
  humidity: number;
}

const props = defineProps<forecast: HourlyViewProps[]>();
</script>

<template>
  <div class="hourly-forecast flex space-x-4 overflow-x-auto">
    <div
      v-for="hour in forecast"
      :key="hour.time"
      class="flex flex-col items-center p-2 rounded-lg"
    >
      <span class="text-lg font-medium">{{ hour.temp }}&deg;</span>
      <span class="text-xs">{{ hour.humidity }}&#37;</span>
      <WeatherIcon :code="hour.icon" size="2" />
      <span class="text-sm">{{ hour.time }}</span>
    </div>
  </div>
</template>
