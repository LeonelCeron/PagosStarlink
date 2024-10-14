<template>
        <div>
            <h3 class="text-center">Login</h3>
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
                    <div class="text-subtitle-1 text-medium-emphasis">Account</div>

                    <v-text-field
                    v-model="user.email"
                    density="compact"
                    placeholder="Email address"
                    prepend-inner-icon="mdi-account"
                    variant="outlined"
                    ></v-text-field>

                    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                    Password

                    <a
                        class="text-caption text-decoration-none text-blue"
                        href="#"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Forgot login password?</a>
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

                    <v-card
                    class="mb-12"
                    color="surface-variant"
                    variant="tonal"
                    >
                    <v-card-text class="text-medium-emphasis text-caption">
                        Warning: After 3 consecutive failed login attempts, you account will be temporarily locked for three hours. If you must login now, you can also click "Forgot login password?" below to reset the login password.
                    </v-card-text>
                    </v-card>

                    <v-btn
                    :loading="loading"
                    @click="login"
                    class="mb-8"
                    color="blue"
                    size="large"
                    variant="tonal"
                    block
                    >
                    Log In
                    </v-btn>

                    <v-card-text class="text-center">
                    <router-link
                        :to="{ name: 'Register'}"
                        class="text-blue text-decoration-none"
                        rel="noopener noreferrer"
                    >
                        Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
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
        email: '',
        password: '',
    });

    function login(ev){    
        //console.log(user.value);
        ev.preventDefault();
        loading.value = true;
        store
            .login(user.value)
            .then(() => {
                loading.value = false;
                router.push({
                    name: 'Dashboard'
                })
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





