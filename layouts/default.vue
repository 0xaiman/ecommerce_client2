<template>
    <div>
      <nav class="bg-gray-100 p-4">
        <NuxtLink to="/" class="mr-4">Home</NuxtLink>
        <NuxtLink to="/products" class="mr-4">Products</NuxtLink>
        <NuxtLink to="/auth/register" class="mr-4">Register</NuxtLink>
        <NuxtLink to="/auth/login" class="mr-4">Login</NuxtLink>
      </nav>
      <main>
        <slot />
    </main>
    </div>
  </template>
  <script setup></script>
  
  