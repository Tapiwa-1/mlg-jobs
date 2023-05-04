import { useUserStore } from "~/stores/user"
import { useGeneralStore } from "~/stores/general"
import { useRoleStore} from "~/stores/role"
export default defineNuxtPlugin((NuxtApp) => {
    return {
        provide: { 
            userStore: useUserStore(),
            generalStore: useGeneralStore(),
            roleStore: useRoleStore()
        },
    }
})