<template>
    
    <NuxtLayout name="dashlayout"/>
    <div class="p-4 sm:ml-64 max-w-sm  w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
       <div class="p-4  rounded-lg">
        <div class="space-y-4 md:space-y-6">
            <div>
             {{  $userStore.name }}
            <InputLabel for="name" value="Role Name" />
                <TextInput  
                    id="name"
                    type="text"
                    v-model="name"
                    required
                    autofocus
                    

                />
                <InputError class="mt-2" :message="errors && errors.name ? errors.name[0] : ''"/>
            </div>
            
            <PrimaryButton @click="editRole()">
                Edit Role
            </PrimaryButton>
            
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
        $userStore.getEditUser(route.params.id)
    })
    const { $userStore, $generalStore, $roleStore} = useNuxtApp()


    const router = useRouter()
    const route = useRoute()
    let name = $roleStore.role.name
    let id = route.params.id
    let errors = ref(null)
    const editUser = async () => {
        
        $generalStore.isProcessing = true
        errors.value = null
        try {
            await $roleStore.editUser(id, name)
            router.push('/roles')
            $generalStore.isProcessing = false
        } catch (error) {
            errors.value = error.response.data.errors
            $generalStore.isProcessing = false
        }
    }

    </script>