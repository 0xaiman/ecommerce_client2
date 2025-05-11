import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { loginUser, registerUser, logoutUser } from '~/services/authService'

interface User {
  id: number
  name: string
  email: string
}

interface AuthResponse {
  user: User
  token: string
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const token = useCookie('token') // stored in a cookie (works SSR/CSR)

  const isAuthenticated = computed(() => !!token.value)

  const login = async (form: { email: string; password: string }) => {
    try {
      const response = await loginUser(form) as AuthResponse
      user.value = response.user
      token.value = response.token
      return response
    } catch (e: any) {
      throw new Error(e.message || 'Login failed')
    }
  }

  const register = async (form: {
    name: string
    email: string
    password: string
    password_confirmation: string
  }) => {
    try {
      const response = await registerUser(form) as AuthResponse
      user.value = response.user
      token.value = response.token
      return response
    } catch (e: any) {
      throw new Error(e.message || 'Registration failed')
    }
  }

  const logout = async () => {
    try {
      await logoutUser()
    } catch (e) {
      console.error('Logout error:', e)
    } finally {
      user.value = null
      token.value = null
    }
  }

  return {
    user,
    token,
    isAuthenticated,
    login,
    register,
    logout,
  }
})
