
import { defineStore } from 'pinia'
import axios from '../plugins/axios'


const $axios = axios().provide.axios

export const useRoleStore = defineStore('role', {
  state: () => ({
    role : '',
    roles : '',
    role_id: '',
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
    async getRole(roleId) {
      
      let res = await $axios.get(`/api/role/${roleId}`, {
        role_id: roleId
      })
      this.$state.role = res.data
    },
    async deleteRole(roleId){
      
      let res = await $axios.delete(`/api/role/${roleId}`, {
        role_id: roleId
      })

      if (res.status === 200) {
        await this.getRoles()
       
      }
    }
   
  
   
  },
  persist: true,
})