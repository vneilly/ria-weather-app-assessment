<script setup lang="ts">
// props and emits will be defined here
import { defineProps, defineEmits } from "vue";
import { City } from "@/constants/cityList";

interface TabProps {
  cities: City[];
  active: City;
}

interface TabEmits {
  (e: "select", city: City): void;
}

const props = defineProps<TabProps>();
const emit = defineEmits<TabEmits>();

const getTabClasses = (city: City) => {
  const base =
    "focus:outline-none cursor-pointer px-4 py-2 uppercase text-sm transition-colors duration-200 ease-in-out";
  const activeStyles = "text-gray-900 border-b-2 border-red-500 font-semibold";
  const inactiveStyles = "text-gray-500 hover:text-gray-700";

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
      :key="city.id"
      :class="getTabClasses(city)"
      type="button"
      @click="emit('select', city)"
    >
      {{ city.name.toUpperCase() }}
    </button>
  </div>
</template>
