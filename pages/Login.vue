<template>
<NuxtLayout name="authlayout">
        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
        </h1>
        <form class="space-y-4 md:space-y-6" action="#">
            <div>
            <InputLabel for="email" value="Email" />
                <TextInput  
                    id="email"
                    type="email"
                    required
                    autofocus
                    autocomplete="username"
                />
            </div>
            <div>
            <InputLabel for="password" value="Password" />
                <TextInput  
                    id="password"
                    type="password"
                    required
                />
            </div>
            <button type="submit" class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet? <NuxtLink to="/register" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</NuxtLink>
            </p>
        </form>
    </NuxtLayout>
</template>