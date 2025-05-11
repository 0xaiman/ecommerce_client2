interface LoginForm {
  email: string;
  password: string;
}

interface RegisterForm {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

interface AuthResponse {
  user: {
    id: number;
    name: string;
    email: string;
  };
  token: string;
}

export const loginUser = async (form: LoginForm): Promise<AuthResponse> => {
  try {
    const { $axios } = useNuxtApp();
    const { data } = await $axios.post('/login', form);
    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};

export const registerUser = async (form: RegisterForm): Promise<AuthResponse> => {
  try {
    const { $axios } = useNuxtApp();
    const { data } = await $axios.post('/register', form);
    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Registration failed');
  }
};

export const logoutUser = async (): Promise<void> => {
  try {
    const { $axios } = useNuxtApp();
    await $axios.post('/logout');
  } catch (error: any) {
    console.error('Logout error:', error);
  }
};


  