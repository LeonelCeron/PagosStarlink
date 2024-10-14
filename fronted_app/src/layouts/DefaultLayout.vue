<template>
    <v-layout class="rounded rounded-md">
        <v-app>

            <TheAppBar></TheAppBar>
            
            <v-main class="bg-surface-light">
                <v-col cols="12">
                    <v-sheet class="pa-2" min-height="600" :elevation="1">

                        <RouterView />
                        
                    </v-sheet>
                </v-col>
            </v-main>
            
            <TheFooter></TheFooter>

        </v-app>
    </v-layout>
</template>

<script>
    //import { useStore } from 'pinia';
 
    import useStore from '@/store';
    import { computed } from 'vue';
    import { useRouter } from 'vue-router';
    import TheAppBar from '@/components/layout/TheAppBar.vue';
    import TheFooter from '@/components/layout/TheFooter.vue';
    

    export default {
        components: { 
            TheAppBar,
            TheFooter
        },
        setup() { 
            const store = useStore();
            const router = useRouter();
           
            /*
            function logout(){
                store.logout();
                router.push({
                    name: 'Login'
                })
            }
            */

            return {
                //logout,
                user: computed(() => store.$state.user.data)
            };
        },
        
    }
</script>