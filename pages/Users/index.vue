<template>
    
<NuxtLayout name="dashlayout"/>
<div class="p-4 sm:ml-64">
   <div class="p-4  rounded-lg">

     
<div class="relative overflow-x-auto">
    
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                  Username
                </th>
                <th scope="col" class="px-6 py-3">
                    email
                </th>
                <th scope="col" class="px-6 py-3">
                    role
                </th>
            </tr>
        </thead>
        <tbody v-for="user in $userStore.users" :key="user.id">
          
            <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{user.name}}
                </th>
                <td class="px-6 py-4">
                    {{ user.email }}
                </td>
                <td class="px-6 py-4">
                    <NuxtLink :to="`/users/${user.id}`" class="text-warning-500">Assign</NuxtLink>
                </td>
              
            </tr>
            
          
        </tbody>
    </table>
</div>

   </div>
</div>


</template>
<script setup>

import { onMounted } from 'vue'
import { 
    initAccordions, 
    initCarousels, 
    initCollapses, 
    initDials, 
    initDismisses, 
    initDrawers, 
    initDropdowns, 
    initModals, 
    initPopovers, 
    initTabs, 
    initTooltips } from 'flowbite'
const { $userStore, $generalStore} = useNuxtApp()
   definePageMeta({
  middleware: 'auth'
   })
// initialize components based on data attribute selectors
onMounted(() => {
    initAccordions();
    initCarousels();
    initCollapses();
    initDials();
    initDismisses();
    initDrawers();
    initDropdowns();
    initModals();
    initPopovers();
    initTabs();
    initTooltips();
})

    
  

</script>