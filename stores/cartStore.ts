import { defineStore } from "pinia";
import { ref } from "vue";
import { useNuxtApp } from "#app";

interface CartItem {
  id: number;
  product_id: number;
  quantity: number;
  price: number;
  product: {
    id: number;
    name: string;
    price: string;
  };
}

export const useCartStore = defineStore("cart", () => {
  const cartItems = ref<CartItem[]>([]);
  const total = ref<number>(0);
  const error = ref<string | null>(null);
  const loading = ref<boolean>(false);

  const fetchCart = async () => {
    loading.value = true;
    error.value = null;
    try {
      const { $axios } = useNuxtApp();
      const response = await $axios.get("/cart");
      cartItems.value = response.data.items || [];
      total.value = response.data.total || 0;
    } catch (e: any) {
      error.value = e.message || "Failed to fetch cart";
      cartItems.value = [];
      total.value = 0;
    } finally {
      loading.value = false;
    }
  };

  const addToCart = async (productId: number, quantity = 1) => {
    error.value = null;
    try {
      const { $axios } = useNuxtApp();
      await $axios.post("/cart/add", {
        product_id: productId,
        quantity,
      });
      await fetchCart();
    } catch (e: any) {
      error.value = e.message || "Failed to add to cart";
    }
  };

  const removeFromCart = async (itemId: number) => {
    error.value = null;
    try {
      const { $axios } = useNuxtApp();
      await $axios.delete(`/cart/item/${itemId}`);
      await fetchCart();
    } catch (e: any) {
      error.value = e.message || "Failed to remove item";
    }
  };

  const clearCart = async () => {
    error.value = null;
    try {
      const { $axios } = useNuxtApp();
      await $axios.delete("/cart/clear");
      cartItems.value = [];
      total.value = 0;
    } catch (e: any) {
      error.value = e.message || "Failed to clear cart";
    }
  };

  return {
    cartItems,
    total,
    loading,
    error,
    fetchCart,
    addToCart,
    removeFromCart,
    clearCart,
  };
});
