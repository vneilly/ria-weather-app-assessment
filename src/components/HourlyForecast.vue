<script setup lang="ts">
import { defineProps } from "vue";
import WeatherIcon from "./WeatherIcon.vue";

interface HourlyViewProps {
  temp: number;
  humidity: number;
  icon: string;
  time: string;
}

const props = defineProps<{ hours: HourlyViewProps[] }>();
</script>

<template>
  <div class="hourly-forecast flex space-x-4 overflow-x-auto scroll-smooth">
    <div
      v-for="hour in props.hours"
      :key="hour.time"
      class="w-24 flex-shrink-0 snap-start bg-white border border-gray-200 p-4 rounded-lg text-center"
    >
      <span class="text-lg font-medium block">{{ hour.temp }}&deg;</span>
      <span class="text-xs text-blue-400 block mt-1"
        >{{ hour.humidity }}&#37;</span
      >
      <WeatherIcon :code="hour.icon" :size="2" />
      <span class="text-sm block mt-1">{{ hour.time }}</span>
    </div>
  </div>
</template>
