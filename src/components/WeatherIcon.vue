<template>
  <img
    :src="iconUrl"
    :alt="altText"
    class="inline-block w-8 h-8"
    loading="lazy"
  />
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";

interface WeatherIconProps {
  code: string;
  size?: number;
}

const props = defineProps<WeatherIconProps>();
</script>
