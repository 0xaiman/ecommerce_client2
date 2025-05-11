<template>
    <div class="p-6 max-w-md mx-auto">
      <h2 class="text-2xl font-bold mb-4">Register</h2>
      <form @submit.prevent="register">
        <input v-model="name" placeholder="Name" class="input" />
        <input v-model="email" type="email" placeholder="Email" class="input mt-2" />
        <input v-model="password" type="password" placeholder="Password" class="input mt-2" />
        <button class="btn mt-4">Register</button>
      </form>
    </div>
  </template>
  
  <script setup>
  const name = ref('')
  const email = ref('')
  const password = ref('')
  
  const register = async () => {
    // Call your API here using $fetch or useFetch
    console.log({ name, email, password })
  }
  </script>
  
  <style scoped>
  .input {
    @apply border rounded px-3 py-2 w-full;
  }
  .btn {
    @apply bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700;
  }
  </style>
  