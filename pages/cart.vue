<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-6">Your Cart</h1>

    <div v-if="cart.items.length > 0" class="space-y-4">
      <div
        v-for="item in cart.items"
        :key="item.id"
        class="flex justify-between items-center border-b pb-2"
      >
        <div>
          <p class="font-semibold">{{ item.name }}</p>
          <p class="text-gray-600">RM {{ item.price }} x {{ item.quantity }}</p>
        </div>
        <div class="text-right font-bold">
          RM {{ item.price * item.quantity }}
        </div>
      </div>

      <div class="mt-6 text-xl font-bold">Total: RM {{ cart.totalPrice }}</div>
    </div>

    <div v-else class="text-gray-500">Your cart is empty.</div>
  </div>
</template>

<script setup>
import { useCartStore } from "~/stores/cartStore";

const cart = useCartStore();
</script>
