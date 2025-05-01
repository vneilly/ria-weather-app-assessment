<script setup lang="ts">
import Header from "@/components/Header.vue";
import ForecastView from "@/views/ForecastView.vue";
</script>

<template>
  <!-- App Header -->
  <Header />

  <!-- Main Content -->
  <main class="container mx-auto px-4 pt-16">
    <ForecastView />
  </main>
</template>
