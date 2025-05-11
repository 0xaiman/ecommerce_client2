import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { getProducts, getProduct } from '~/services/productService';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
}

export const useProductStore = defineStore('product', () => {
  const products = ref<Product[]>([]);
  const currentProduct = ref<Product | null>(null);
  const error = ref<string | null>(null);
  const loading = ref<boolean>(false);

  const fetchProducts = async () => {
    loading.value = true;
    error.value = null;
    try {
      products.value = await getProducts();
    } catch (e: any) {
      error.value = e.message || 'Failed to fetch products';
    } finally {
      loading.value = false;
    }
  };

  const fetchProduct = async (id: string | string[]) => {
    loading.value = true;
    error.value = null;
    try {
      currentProduct.value = await getProduct(id);
    } catch (e: any) {
      error.value = e.message || 'Failed to fetch product';
    } finally {
      loading.value = false;
    }
  };

  return {
    products,
    currentProduct,
    error,
    loading,
    fetchProducts,
    fetchProduct,
  };
});
