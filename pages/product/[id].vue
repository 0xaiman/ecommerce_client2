<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Product Details</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <!-- Image -->
        <img
          src="https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Product Image"
          class="w-full h-full object-cover"
        />
      </div>
      <div>
        <!-- Product Details -->

        <div v-if="product" class="space-y-2">
          <h2 class="text-2xl md:text-3xl font-bold">{{ product.name }}</h2>
          <div class="flex items-center gap-2">
            <StarRatings
              v-model="rating"
              :star-size="24"
              :number-of-stars="5"
              star-color="#ff9f1c"
              inactive-color="#e5e7eb"
              :disable-click="true"
            />
          </div>

          <p class="text-gray-700">Description: {{ product.description }}</p>
          <p class="text-4xl text-blue-600 font-bold">RM {{ product.price }}</p>
          <button
            class="bg-blue-600 text-white px-4 py-2 rounded-md"
            @click="addToCart"
          >
            Add to Cart
          </button>
        </div>
        <div v-else class="text-gray-500">Product not found</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import { useProductStore } from "~/stores/productStore";
import { storeToRefs } from "pinia";
import StarRatings from "vue3-star-ratings";
import { useCartStore } from "~/stores/cartStore";

definePageMeta({
  layout: "default",
});

const route = useRoute();
const productStore = useProductStore();
const { currentProduct: product, loading, error } = storeToRefs(productStore);
const rating = ref(4.5);
const cartStore = useCartStore();

const addToCart = () => {
  cartStore.addToCart(product.value.id, 1);
  alert("Product added to cart!");
};

onMounted(() => {
  productStore.fetchProduct(route.params.id);
});
</script>
