<template>
    <div class="p-6 max-w-md mx-auto">
      <h2 class="text-2xl font-bold mb-4">Login</h2>
      <form @submit.prevent="login">
        <input v-model="email" type="email" placeholder="Email" class="input" />
        <input v-model="password" type="password" placeholder="Password" class="input mt-2" />
        <button class="btn mt-4">Login</button>
      </form>
    </div>
  </template>
  
  <script setup>
  const email = ref('')
  const password = ref('')
  
  const login = async () => {
    // Call your login API here
    console.log({ email, password })
  }
  </script>
  
  <style scoped>
  .input {
    @apply border rounded px-3 py-2 w-full;
  }
  .btn {
    @apply bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700;
  }
  </style>
  