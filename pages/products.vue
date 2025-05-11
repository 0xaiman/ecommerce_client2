<template>
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">All Products</h1>
  
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ProductCard
          v-for="product in products.data"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import ProductCard from '~/components/ProductCard.vue';
  import { useProductStore } from '~/stores/productStore';
  import { storeToRefs } from 'pinia';

  definePageMeta({
  layout: 'default',
})

  const productStore = useProductStore();
  const { products, loading, error } = storeToRefs(productStore);
  
  onMounted(async () => {
    await productStore.fetchProducts();
  });
  </script>
  