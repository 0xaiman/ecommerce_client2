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

    // 👇 Required before any login attempt
    await $axios.get("/sanctum/csrf-cookie", { withCredentials: true });

    const { data } = await $axios.post("/login", form, {
      withCredentials: true, // 👈 send cookies
    });

    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

export const registerUser = async (
  form: RegisterForm
): Promise<AuthResponse> => {
  try {
    const { $axios } = useNuxtApp();

    // 👇 Also needed here
    await $axios.get("/sanctum/csrf-cookie", { withCredentials: true });

    const { data } = await $axios.post("/register", form, {
      withCredentials: true,
    });

    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Registration failed");
  }
};

export const logoutUser = async (): Promise<void> => {
  try {
    const { $axios } = useNuxtApp();
    await $axios.post("/logout", {}, { withCredentials: true });
  } catch (error: any) {
    console.error("Logout error:", error);
  }
};
