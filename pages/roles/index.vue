<template>
 <NuxtLayout name="dashlayout"/>
<div class="p-4 sm:ml-64">
   <div class="p-4  rounded-lg">
        <div class="relative overflow-x-auto">
            <NuxtLink to="roles/create" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create Role</NuxtLink>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                        Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <Spinner v-if="$generalStore.isProccesing"/>
                <tbody v-for="role in $roleStore.roles" :key="role.id">
                
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ role.name }}
                        </th>
                        <td class="px-6 py-4">
                            <NuxtLink :to="`/roles/${role.id}`" class="text-warning-500">Edit</NuxtLink>
                            <button @click="$roleStore.deleteRole(role.id)"  class="text-red-500">Delete</button>
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
    $roleStore.getRoles();

})
const { $userStore, $generalStore, $roleStore} = useNuxtApp()


</script>