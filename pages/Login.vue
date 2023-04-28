<script setup>
   const { $userStore, $generalStore} = useNuxtApp()

   const router = useRouter()

    let email = ref(null)
    let password = ref(null)
    let errors = ref(null)
    
    const login = async () => {
        $generalStore.isProcessing = true
        errors.value = null
        try {
            await $userStore.getTokens()
            await $userStore.login(email.value, password.value)
            await $userStore.getUser()
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
            Sign in to your account
        </h1>
        <div class="space-y-4 md:space-y-6">
            <div>
            <InputLabel for="email" value="Email" />
                <TextInput  
                    id="email"
                    type="email"
                    v-model="email"
                    required
                    autofocus
                    autocomplete="username"
                />
                <InputError class="mt-2" :message="errors && errors.email ? errors.email[0] : ''"/>
            </div>
            <div>
            <InputLabel for="password" value="Password" />
                <TextInput  
                    id="password"
                    v-model="password"
                    type="password"
                    required
                />
                <InputError class="mt-2" :message="errors && errors.password ? errors.password[0] : ''"/>
            </div>
            <PrimaryButton @click="login()">
                Login
            </PrimaryButton>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet? <NuxtLink to="/register" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</NuxtLink>
            </p>
        </div>
    </NuxtLayout>
</template>