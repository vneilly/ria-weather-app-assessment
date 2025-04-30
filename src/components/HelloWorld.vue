<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <div class="p-6 max-w-2xl mx-auto my-8 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-6">Tailwind CSS Test</h2>

    <!-- Standard Tailwind classes -->
    <section class="mb-8">
      <h3 class="text-xl font-semibold mb-3">Standard Tailwind Classes</h3>
      <div class="p-4 border rounded">
        <p class="text-blue-500 font-bold">This is blue text</p>
        <p class="text-red-500 font-bold">This is red text</p>
        <p class="text-green-500 font-bold">This is green text</p>
        <div class="bg-purple-200 p-3 mt-2">This has a purple background</div>
      </div>
    </section>

    <!-- Custom colors -->
    <section class="mb-8">
      <h3 class="text-xl font-semibold mb-3">Custom Colors</h3>
      <div class="p-4 border rounded">
        <p class="text-textPrimary">Text Primary Color</p>
        <p class="text-textSecondary">Text Secondary Color</p>
        <p class="text-accent">Accent Color</p>
        <div class="bg-headerBg text-white p-3 mt-2">Header Background</div>
      </div>
    </section>

    <!-- Weather backgrounds -->
    <section>
      <h3 class="text-xl font-semibold mb-3">Weather Backgrounds</h3>
      <div class="grid grid-cols-2 gap-4">
        <div
          class="bg-weather-sunny p-4 rounded text-center h-24 flex items-center justify-center"
        >
          Sunny
        </div>
        <div
          class="bg-weather-cloudy p-4 rounded text-center h-24 flex items-center justify-center text-white"
        >
          Cloudy
        </div>
        <div
          class="bg-weather-rainy p-4 rounded text-center h-24 flex items-center justify-center text-white"
        >
          Rainy
        </div>
        <div
          class="bg-weather-stormy p-4 rounded text-center h-24 flex items-center justify-center text-white"
        >
          Stormy
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
