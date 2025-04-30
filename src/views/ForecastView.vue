<script setup lang="ts">
import { ref, watch } from "vue";
import { Tabs } from "@/components/Tabs.vue";

const activeCity = ref("Los Angeles");

const handleSetActiveCity = (city: string) => {
  activeCity.value = city;
};
</script>

<template>
  <div>
    <!-- Tabs will be added here -->
    <Tabs
      :cities="['Los Angeles', 'New York', 'Chicago']"
      :active="activeCity"
      @select="activeCity = $event"
    />
  </div>
</template>
