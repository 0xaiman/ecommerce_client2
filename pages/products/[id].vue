<template>
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Product Details</h1>
      <p class="text-lg">ID: {{ id }}</p>
    </div>
  </template>
  
  <script setup>
  const route = useRoute();
  const id = route.params.id;
  </script>
  