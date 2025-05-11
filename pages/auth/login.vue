<template>
    <div class="p-6 max-w-md mx-auto">
      <h2 class="text-2xl font-bold mb-4">Login</h2>
      <form @submit.prevent="handleLogin" class="space-y-4">
        <div v-if="error" class="text-red-500 text-sm">{{ error }}</div>
        <input v-model="form.email" type="email" placeholder="Email" class="input" required />
        <input v-model="form.password" type="password" placeholder="Password" class="input" required />
        <button type="submit" class="btn w-full">Login</button>
        <p class="text-center mt-4">
          Don't have an account? 
          <NuxtLink to="/auth/register" class="text-blue-600 hover:underline">Register here</NuxtLink>
        </p>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useAuthStore } from '~/stores/authStore';

  definePageMeta({
  layout: 'default',
})
  
  const auth = useAuthStore();
  const error = ref('');
  const form = ref({
    email: '',
    password: ''
  });
  
  const handleLogin = async () => {
    try {
      error.value = '';
      await auth.login(form.value);
      // Navigate to home or dashboard after successful login
      await navigateTo('/');
    } catch (e) {
      error.value = e?.message || 'Login failed';
    }
  };
  </script>
  
  <style scoped>
  .input {
    @apply border rounded px-3 py-2 w-full;
  }
  .btn {
    @apply bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700;
  }
  </style>
  