<script setup lang="ts">
// props and emits will be defined here
import { defineProps, defineEmits } from "vue";
import { CITY_LIST, City } from "@/constants/cityList";

interface TabProps {
  cities: City[];
  active: City;
}

interface TabEmits {
  (e: "select", city: City): void;
}

const props = defineProps<TabProps>();
const emit = defineEmits<TabEmits>();

const getTabClasses(city: City) => {
  const base = "focus:outline-none cursor-pointer px-4 py-2";
  const activeStyles = "text-textPrimary font-semibold";
  const inactiveStyles = "text-textSecondary hover:text-accent";

  return `${base} ${
    city.id === props.active.id ? activeStyles : inactiveStyles
  }`;
};
</script>

<template>
  <!-- Tab buttons will go here -->
  <div class="flex space-x-4">
    <button
      v-for="city in props.cities"
      :key="city"
      :class="getTabClasses(city)"
      type="button"
      @click="emit('select', city)"
    >
      {{ city }}
    </button>
  </div>
</template>
