<template>
    
    <NuxtLayout name="dashlayout"/>
    <div class="p-4 sm:ml-64 max-w-sm  w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
       <div class="p-4  rounded-lg">
        <div class="space-y-4 md:space-y-6">
            <div>
            <InputLabel for="name" value="Title" />
                <TextInput  
                    id="name"
                    type="text"
                    v-model="name"
                    required
                    autofocus

                />
            <InputError class="mt-2" :message="errors && errors.name ? errors.name[0] : ''"/>
            </div>
            <!-- <template>
                <QuillEditor theme="snow" />
            </template> -->
            <PrimaryButton @click="addRole()">
                Add Job
            </PrimaryButton>
          
        </div>
       </div>
    </div>
    
    </template>
    <script setup>
    // import { QuillEditor } from '@vueup/vue-quill'
    // import '@vueup/vue-quill/dist/vue-quill.snow.css';
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
    const { $userStore, $generalStore, $roleStore} = useNuxtApp()


   const router = useRouter()

    let name = ref(null)
    let errors = ref(null)
    const addRole = async () => {
        $generalStore.isProcessing = true
        errors.value = null
        try {
            await $roleStore.addRole(name.value)
            router.push('/roles')
            $generalStore.isProcessing = false
        } catch (error) {
            errors.value = error.response.data.errors
            $generalStore.isProcessing = false
        }
    }

    </script>