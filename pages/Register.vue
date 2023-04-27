<script setup>
   const { $userStore, $generalStore} = useNuxtApp()

   const router = useRouter()

    let name  = ref(null)
    let email = ref(null)
    let password = ref(null)
    let confirmPassword = ref(null)
    let errors = ref(null)
    
    const register = async () => {
        $generalStore.isProcessing = true
        errors.value = null
        try {
            await $userStore.getTokens()
            await $userStore.register(name.value,email.value,password.value,confirmPassword.value)
            // await $userStore.getUser()
            router.push('/dashboard')
            $generalStore.isProcessing = false
        } catch (error) {
            errors.value = error.response.data.errors
            $generalStore.isProcessing = false
        }
    }
</script>
<template>
    <NuxtLayout name="authlayout">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign up to your account
            </h1>
            <div class="space-y-4 md:space-y-6">
                <div>
                <InputLabel for="username" value="Username" />
                    <TextInput  
                        id="username"
                        type="text"
                        required
                        autofocus
                        autocomplete="username"
                        v-model="name"
                    />
                    <InputError class="mt-2" :message="errors && errors.name ? errors.name[0] : ''"/>
                </div>
                <div>
                <InputLabel for="email" value="Email" />
                    <TextInput  
                        id="email"
                        type="email"
                        required
                        v-model="email"
                    />
                    <InputError class="mt-2" :message="errors && errors.email ? errors.email[0] : ''"/>
                </div>
                <div>
                <InputLabel for="password" value="Password" />
                    <TextInput  
                        id="password"
                        type="password"
                        required
                        v-model="password"
                    />
                    <InputError class="mt-2" :message="errors && errors.password ? errors.password[0] : ''"/>
                </div>
                <div>
                <InputLabel for="confirmpassword" value="Confirm Password" />
                    <TextInput  
                        id="confirmpassword"
                        type="password"
                        required
                        v-model="confirmPassword"
                    />
                    <InputError class="mt-2" :message="errors && errors.confirmPassword ? errors.confirmPassword[0] : ''"/>
                </div>
                <PrimaryButton @click="register()">
                    Sign in
                </PrimaryButton>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                     Have an account yet? <NuxtLink to="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Log in</NuxtLink>
                </p>
            </div>
        </NuxtLayout>
    </template>