import axios from 'axios';

export default defineNuxtPlugin(() => {
  const instance = axios.create({
    baseURL: 'http://localhost:8000/api',
    withCredentials: true, // for Sanctum
  });

  // Add request interceptor to include token in headers
  instance.interceptors.request.use((config) => {
    const token = useCookie('token').value;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return {
    provide: {
      axios: instance,
    },
  };
});
