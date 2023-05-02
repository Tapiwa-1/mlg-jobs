<template>
    
<NuxtLayout name="dashlayout"/>
<div class="p-4 sm:ml-64">
   <div class="p-4  rounded-lg">
     welcome {{  $userStore.name }}
     dashboard
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