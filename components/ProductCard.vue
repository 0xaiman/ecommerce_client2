<template>
    <NuxtLink :to="`/product/${product.id}`" class="block">
      <div class="border rounded-lg p-4 shadow hover:shadow-md transition">
        <h2 class="font-semibold text-lg">{{ product.name }}</h2>
        <p class="text-gray-600">{{ product.description }}</p>
        <p class="mt-2 font-bold text-blue-600">RM {{ product.price }}</p>
      </div>
    </NuxtLink>
  </template>
  
  <script setup>
  defineProps({
    product: {
      type: Object,
      required: true,
    },
  });
  </script>
  