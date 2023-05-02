import { defineStore } from 'pinia'
import axios from '../plugins/axios'


const $axios = axios().provide.axios

export const useGeneralStore = defineStore('general', {
    state: () => ({
       isProccesing: false
      }),
      persist: true,
})