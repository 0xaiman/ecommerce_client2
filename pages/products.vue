<template>
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">All Products</h1>
  
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import ProductCard from '~/components/ProductCard.vue';
  
  const products = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    description: `This is a short description for Product ${i + 1}.`,
    price: (Math.random() * 100 + 10).toFixed(2),
  }));
  </script>
  