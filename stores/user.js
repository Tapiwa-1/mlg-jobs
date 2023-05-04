
import { defineStore } from 'pinia'
import axios from '../plugins/axios'


const $axios = axios().provide.axios

export const useUserStore = defineStore('user', {
  state: () => ({
    id: '',
    name : '',
    email: '',
    users: null,
    isAuthenticated: false
  }),
  actions: {
    async getTokens() {
        //token
        await $axios.get('/sanctum/csrf-cookie')
    },

    async login(email, password) {
      //login
        await $axios.post('/login', {
          email: email,
          password: password
        })
        this.$state.isAuthenticated = true
      },

      async register(name, email, password, confirmPassword) {
        await $axios.post('/register', {
          name: name,
          email: email,
          password: password,
          password_confirmation: confirmPassword
        })
        this.$state.isAuthenticated = true
    },
    async getUser() {
      let res = await $axios.get('/api/logged-in-user')
    
      this.$state.id = res.data[0].id
      this.$state.name = res.data[0].name
      this.$state.email = res.data[0].email
      this.getUsers()

    },
    async logout (){
      await $axios.post('/logout')
      this.resetUser()
      
    },
     async getUsers() {
      let res = await $axios.get('/api/get-users')
      this.$state.users = res.data
    },
    resetUser() {      
      this.$state.id = ''
      this.$state.name = ''
      this.$state.email = ''
      this.$state.isAuthenticated = false
      this.$state.users = null
    }
    
  },
  persist: true,
})