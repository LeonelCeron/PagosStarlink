<template>
    <div>
        <h3 class="text-center">Register</h3>
        <v-img
            class="mx-auto my-6"
            max-width="228"
            src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"
        ></v-img>
        <v-form>
            <v-card
                class="mx-auto pa-12 pb-8"
                elevation="8"
                max-width="448"
                rounded="lg"
            >
                <v-alert v-if="Object.keys(errors).length"
                    closable
                    density="compact"
                    title="Alert errors"
                    type="warning"
                >
                <div v-for="(field, i) of Object.keys(errors)" :key="i">
                    <div v-for="(error, ind) of errors[field] || []" :key="ind">
                    * {{ error }}
                    </div>
                </div>
                </v-alert>
                <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                Name
                </div>

                <v-text-field
                v-model="user.name"
                type="text"
                density="compact"
                placeholder="Enter your name"
                prepend-inner-icon="mdi-account"
                variant="outlined"
                ></v-text-field>
                
                <div class="text-subtitle-1 text-medium-emphasis">Email</div>

                <v-text-field
                v-model="user.email"
                density="compact"
                placeholder="Email address"
                prepend-inner-icon="mdi-email-outline"
                variant="outlined"
                ></v-text-field>

                <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                Password
                </div>

                <v-text-field
                v-model="user.password"
                :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                :type="visible ? 'text' : 'password'"
                density="compact"
                placeholder="Enter your password"
                prepend-inner-icon="mdi-lock-outline"
                variant="outlined"
                @click:append-inner="visible = !visible"
                ></v-text-field>


                <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                Password confirmation
                </div>

                <v-text-field
                v-model="user.password_confirmation"
                :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                :type="visible ? 'text' : 'password'"
                density="compact"
                placeholder="Enter your password confirmation"
                prepend-inner-icon="mdi-lock-outline"
                variant="outlined"
                @click:append-inner="visible = !visible"
                ></v-text-field>

                <v-card
                class="mb-12"
                color="surface-variant"
                variant="tonal"
                >
                <v-card-text class="text-medium-emphasis text-caption">
                    Errors
                </v-card-text>
                </v-card>

                <v-btn
                :loading="loading"
                @click="register"
                class="mb-8"
                color="blue"
                size="large"
                variant="tonal"
                block
                >
                Register
                </v-btn>

                <v-card-text class="text-center">
                <router-link
                    :to="{ name: 'Login'}"
                    class="text-blue text-decoration-none"
                    rel="noopener noreferrer"
                >
                    Login <v-icon icon="mdi-chevron-right"></v-icon>
                </router-link>
                </v-card-text>
            </v-card>

        </v-form>

    </div>
    
</template>

<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import useStore from '@/store';

    const router = useRouter();
    const visible = ref(false);
    const loading = ref(false);
    const errors = ref({});
    const store = useStore();

    const user = ref({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    function register(ev){    
        //console.log(user.value);
        ev.preventDefault();
        loading.value = true;
        store
            .register(user.value)
            .then(() => {
                loading.value = false;
                /*router.push({
                    name: 'Dashboard'
                })*/
            })
            .catch((error) => {
                //console.error("Register: Error during registration:", error);
                loading.value = false;
                if (error.response.status === 422) {
                    errors.value = error.response.data.errors;
                    console.log(errors.value);
                }
            });
    }
</script>