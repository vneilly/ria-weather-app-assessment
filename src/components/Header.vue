<script setup lang="ts">
import { MagnifyingGlassIcon, ArrowPathIcon } from "@heroicons/vue/24/outline";

const onSearch = () => {
  console.log("Search triggered");
};

const onRefresh = () => {
  console.log("Refresh triggered");
};
</script>

<template>
  <header
    class="fixed top-0 w-full flex items-center justify-between bg-headerBg text-white px-4 py-2"
  >
    <!-- App Header Text -->
    <h1 class="text-lg font-semibold">Simple Weather</h1>

    <!-- Right: action icons -->
    <div class="flex items-center">
      <button
        @click="onSearch"
        class="p-2 hover::text-accent transition-colors duration-200 focus:outline-none"
        aria-label="Search"
        title="Search"
      >
        <MagnifyingGlassIcon class="h-6 w-6" />
        >
      </button>
      <button
        @click="onRefresh"
        class="p-2 hover::text-accent transition-colors duration-200 focus:outline-none"
        aria-label="Refresh"
        title="Refresh"
      >
        <ArrowPathIcon class="h-6 w-6" />
      </button>
    </div>
  </header>
</template>
