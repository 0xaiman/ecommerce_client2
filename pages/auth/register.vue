<template>
    <div class="p-6 max-w-md mx-auto">
      <h2 class="text-2xl font-bold mb-4">Register</h2>
      <form @submit.prevent="handleRegister" class="space-y-4">
        <input v-model="form.name" placeholder="Name" class="input" />
        <input v-model="form.email" type="email" placeholder="Email" class="input mt-2" />
        <input v-model="form.password" type="password" placeholder="Password" class="input mt-2" />
        <input v-model="form.password_confirmation" type="password" placeholder="Password Confirmation" class="input mt-2" />
        <button type="submit" class="btn mt-4">Register</button>
      </form>
    </div>
  </template>
  
  <script setup>
import { ref } from 'vue';
import { useAuthStore } from '~/stores/authStore';

const auth = useAuthStore();
const error = ref('');
const form = ref({ 
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
 });

const handleRegister = async () => {
  try {
    error.value = '';
    await auth.register(form.value);
    // Navigate to home or dashboard after registration
    await navigateTo('/');
  } catch (e) {
    error.value = e?.message || 'Registration failed';
  }
};
  </script>
  
  <style scoped>
  .input {
    @apply border rounded px-3 py-2 w-full;
  }
  .btn {
    @apply bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700;
  }
  </style>
  