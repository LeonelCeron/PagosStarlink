<template>
    <v-layout class="rounded rounded-md">
        <v-app>
            <v-main class="bg-surface-light">
                <v-col cols="12">
                    <v-sheet class="pa-2" min-height="600" :elevation="1">

                        <RouterView />
                    </v-sheet>
                </v-col>
            </v-main>
        </v-app>
    </v-layout>
</template>
<script>
export default {
    name: "AuthLayout"
}
</script>