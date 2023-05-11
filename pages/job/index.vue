<template>
    
    <NuxtLayout name="dashlayout"/>
    <div class="p-4 sm:ml-64">
   <div class="p-4  rounded-lg">
        <div class="relative overflow-x-auto">
            <NuxtLink to="job/create" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create Job</NuxtLink>
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
                
                <tbody >
                
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quaerat.
                        </th>
                        <td class="px-6 py-4">
                            <NuxtLink to="/" class="text-warning-500">Edit</NuxtLink>
                            
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
    })
    const { $userStore, $generalStore} = useNuxtApp()
    </script>