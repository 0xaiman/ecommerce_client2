import axios from 'axios';

export default defineNuxtPlugin(() => {
  const instance = axios.create({
    baseURL: 'http://localhost:8000/api',
    withCredentials: true, // for Sanctum
  });

  return {
    provide: {
      axios: instance,
    },
  };
});
