
import { defineStore } from 'pinia'
import axios from '../plugins/axios'


const $axios = axios().provide.axios

export const useRoleStore = defineStore('role', {
  state: () => ({
    roles : '',
  }),
  actions: {
    async addRole(name) {
      await $axios.post('/api/add-role',{
        name: name,
      })
    },
    async getRoles() {
      let res = await $axios.get('/api/roles')
      this.$state.roles = res.data
    },
   
  
   
  },
  persist: true,
})