
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    id: '',
    name : '',
    email: '',
  }),
  actions: {
    async getTokens() {
        await $axios.get('/sanctum/csrf-cookie')
    },

    async login(email, password) {
        await $axios.post('/login', {
          email: email,
          password: password
        })
      },

      async register(name, email, password, confirmPassword) {
        await $axios.post('/register', {
          name: name,
          email: email,
          password: password,
          password_confirmation: confirmPassword
        })
    }
  },
})