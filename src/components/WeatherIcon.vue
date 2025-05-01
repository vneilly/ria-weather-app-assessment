<script setup lang="ts">
import { computed } from "vue";

interface WeatherIconProps {
  code: string;
  size: number;
}

const props = defineProps<WeatherIconProps>();

const iconUrl = computed(
  () => `https://openweathermap.org/img/wn/${props.code}@${props.size}x.png`
);
const altText = computed(() => `Weather icon for ${props.code}`);
</script>

<template>
  <img
    :src="iconUrl"
    :alt="altText"
    class="inline-block w-8 h-8"
    loading="lazy"
  />
</template>
