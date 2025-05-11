//127.0.0.1:8000/api/products

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
}

export const getProducts = async (): Promise<Product[]> => {
  try {
    const { $axios } = useNuxtApp();
    const { data } = await $axios.get('/products');
    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch products');
  }
};

export const getProduct = async (id: string | string[]): Promise<Product> => {
  try {
    const { $axios } = useNuxtApp();
    const { data } = await $axios.get(`/products/${id}`);
    console.log('data', data);
    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch product');
  }
};