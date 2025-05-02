<script setup lang="ts">
import Tabs from "@/components/Tabs.vue";
import { City, CITY_LIST } from "@/constants/cities";
import HourlyForecast from "@/components/HourlyForecast.vue";
import type { HourlyViewProps } from "@/components/HourlyForecast.vue";
import DailyForecast from "@/components/DailyForecast.vue";
import type { DailySummary } from "@/components/DailyForecast.vue";
import { defineEmits } from "vue";

const props = defineProps<{
  activeCity: City;
  hourlyData: HourlyViewProps[];
  dailySummaries: DailySummary[];
  loading: Boolean;
  error: string | null;
}>();

const emit = defineEmits<{
  (e: "select", city: City): void;
}>();

const handleCitySelect = (city: City) => {
  emit("select", city);
};
</script>

<template>
  <div>
    <!-- Tabs will be added here -->
    <Tabs :cities="CITY_LIST" :active="activeCity" @select="handleCitySelect" />

    <!-- Hourly Forecast Section -->
    <section class="mt-6 text-gray-500">
      <h2 class="text-2xl font-bold">Next Hours</h2>

      <!-- hourly forecast component here -->
      <div class="mt-4">
        <HourlyForecast :hours="hourlyData" />
      </div>
    </section>

    <!-- Daily Forecast Section -->
    <section v-if="dailySummaries.length" class="mt-8 text-gray-500">
      <h2 class="text-2xl font-bold">Next 5 Days</h2>

      <div class="mt-4">
        <DailyForecast :summaries="dailySummaries" />
      </div>
    </section>

    <!-- Loading and Error Handling -->
    <div v-if="loading" class="text-center mt-6">Loading...</div>
    <div v-if="error" class="text-red-500 text-center mt-6">
      {{ error.message }}
    </div>
  </div>
</template>
