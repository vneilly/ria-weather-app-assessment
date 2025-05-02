<script setup lang="ts">
import WeatherIcon from "@/components/WeatherIcon.vue";
export interface DailyForecastItem {
  day: string;
  date: string;
  description: string;
  icon: string;
  high: number;
  low: number;
  formattedDate: string;
}

const props = defineProps<{
  summaries: DailyForecastItem[];
}>();
</script>

<template>
  <div class="daily-forecast bg-white rounded-lg divide-y divide-gray-200 p-4">
    <div
      v-for="day in props.summaries"
      :key="day.date"
      class="flex items-center justify-between px-4 py-4"
    >
      <!-- Left: WeatherIcon -->
      <WeatherIcon :code="day.icon" :size="2" class="w-24 h-24 flex-shrink-0" />

      <!-- Middle: Day/Date and Description -->
      <div>
        <div class="text-2xl text-gray-600">
          {{ day.formattedDate }}
        </div>

        <!-- Description -->
        <div class="text-base text-gray-500">
          {{ day.description }}
        </div>
      </div>
      <!-- Right: Hi/Lo temps -->
      <div class="flex space-x-2 text-base font-medium text-gray-800">
        <span>{{ day.maxTemp }}&deg;</span>
        <span>{{ day.minTemp }}&deg;</span>
      </div>
    </div>
  </div>
</template>
