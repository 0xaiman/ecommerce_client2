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

export const loginUser = async (form: LoginForm) => {
    const { data, error } = await useFetch('/api/login', {
      baseURL: 'http://localhost:8000',
      method: 'POST',
      body: form,
    });
  
    if (error.value) throw error.value;
    return data.value;
  };
  
export const registerUser = async (form: RegisterForm) => {
  const { data, error } = await useFetch('/api/register', {
    baseURL: 'http://localhost:8000',
    method: 'POST',
    body: form,
  });

  if (error.value) throw error.value;
  return data.value;
};

export const logoutUser = async () => {
  const { data, error } = await useFetch('/api/logout', {
    baseURL: 'http://localhost:8000',
    method: 'POST',
  });
};


  