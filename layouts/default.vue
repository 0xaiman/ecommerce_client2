<template>
  <div>
    <nav class="bg-gray-100 p-4">
      <NuxtLink to="/" class="mr-4">Home</NuxtLink>
      <NuxtLink to="/products" class="mr-4">Products</NuxtLink>
      <NuxtLink to="/cart" class="mr-4">Cart</NuxtLink>

      <template v-if="isAuthenticated">
        <button @click="logout" class="mr-4 text-red-600">Logout</button>
      </template>
      <template v-else>
        <NuxtLink to="/auth/register" class="mr-4">Register</NuxtLink>
        <NuxtLink to="/auth/login" class="mr-4">Login</NuxtLink>
      </template>
    </nav>

    <main>
      <slot />
    </main>
  </div>
</template>

<script setup>
import { useAuthStore } from "~/stores/authStore";

const auth = useAuthStore();
const isAuthenticated = computed(() => auth.isAuthenticated);

const logout = () => {
  auth.logout();
};
</script>
