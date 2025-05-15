<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-6">Your Cart</h1>

    <div v-if="loading" class="text-gray-500">Loading cart...</div>

    <div v-else-if="error" class="text-red-500">
      {{ error }}
      <button @click="fetchCart" class="ml-2 text-blue-500 hover:text-blue-700">
        Retry
      </button>
    </div>

    <div v-else-if="cartItems && cartItems.length > 0" class="space-y-4">
      <div
        v-for="item in cartItems"
        :key="item.id"
        class="flex justify-between items-center border-b pb-2"
      >
        <div>
          <p class="font-semibold">{{ item.product.name }}</p>
          <p class="text-gray-600">
            RM {{ item.product.price }} x {{ item.quantity }}
          </p>
        </div>
        <div class="text-right font-bold">
          RM {{ (parseFloat(item.product.price) * item.quantity).toFixed(2) }}
        </div>
        <button
          @click="removeFromCart(item.id)"
          class="text-red-500 hover:text-red-700"
        >
          Remove
        </button>
      </div>

      <div class="mt-6 text-xl font-bold">Total: RM {{ total.toFixed(2) }}</div>

      <button
        @click="clearCart"
        class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
      >
        Clear Cart
      </button>
    </div>

    <div v-else class="text-gray-500">Your cart is empty.</div>
  </div>
</template>

<script setup>
import { useCartStore } from "~/stores/cartStore";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const cartStore = useCartStore();
const { cartItems, total, loading, error } = storeToRefs(cartStore);
const { removeFromCart, clearCart, fetchCart } = cartStore;

onMounted(async () => {
  await fetchCart();
});
</script>
