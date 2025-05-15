import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [] as any[],
  }),

  getters: {
    totalItems: (state) =>
      state.items.reduce((sum, item) => sum + item.quantity, 0),
    totalPrice: (state) =>
      state.items.reduce((sum, item) => sum + item.quantity * item.price, 0),
  },

  actions: {
    loadCart() {
      const cart = localStorage.getItem("cart");
      if (cart) {
        this.items = JSON.parse(cart);
      }
    },

    saveCart() {
      localStorage.setItem("cart", JSON.stringify(this.items));
    },

    addToCart(product: any, quantity = 1) {
      const existing = this.items.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity += quantity;
      } else {
        this.items.push({ ...product, quantity });
      }
      this.saveCart();
    },

    removeFromCart(productId: number) {
      this.items = this.items.filter((item) => item.id !== productId);
      this.saveCart();
    },

    updateQuantity(productId: number, quantity: number) {
      const item = this.items.find((item) => item.id === productId);
      if (item) {
        item.quantity = quantity;
        this.saveCart();
      }
    },

    clearCart() {
      this.items = [];
      this.saveCart();
    },
  },
});
