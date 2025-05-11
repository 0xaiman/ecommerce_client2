<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Product Details</h1>

    <div v-if="product" class="space-y-2">
      <h2 class="text-xl font-semibold">{{ product.name }}</h2>
      <p class="text-gray-700">Description: {{ product.description }}</p>
      <p class="text-blue-600 font-bold">Price: RM {{ product.price }}</p>
    </div>
    <div v-else class="text-gray-500">Product not found</div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import { useProductStore } from '~/stores/productStore';
import { storeToRefs } from 'pinia';

definePageMeta({
  layout: 'default',
})

const route = useRoute();
const productStore = useProductStore();
const { currentProduct: product, loading, error } = storeToRefs(productStore);

onMounted(() => {
  productStore.fetchProduct(route.params.id);
});
</script>
