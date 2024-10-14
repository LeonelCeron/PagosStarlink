<template>
    <v-card variant="text">
        <v-card-title class="text-overline font-weight-bold">
            <v-row>
                <v-col cols="6"  md="6" sm="12">
                    <h2>
                        <v-icon icon="mdi-access-point-plus"></v-icon>
                        ADD PLAN
                    </h2>
                </v-col>
                <v-col cols="6"  md="6" sm="12" class="text-right">
                    <v-btn
                        append-icon="mdi-arrow-left"
                        class="text-none"
                        color="primary"
                        text="REGRESAR"
                        variant="text"
                        slim
                        ></v-btn>
                </v-col>
            </v-row>                      
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
            <form>
                <v-row class="mt-3">
                    <v-col cols="12" md="4" sm="6" class="pt-0 pb-1">
                        <BaseInput color="primary" v-model="firstName" label="First name" prepend-inner-icon="mdi-account" autocomplete="null"/>
                    </v-col>
                    <v-col cols="12" md="4" sm="6"  class="pt-0 pb-0">
                        <BaseInput class="mt-0" color="primary" v-model="lastName" label="Last name" prepend-inner-icon="mdi-account" autocomplete="null"/>
                    </v-col>  
                    <v-col cols="12" md="4" sm="6"  class="pt-0 pb-0">
                        <BaseInput color="primary" v-model="addressUser" label="address User" prepend-inner-icon="mdi-map-marker" density="compact"/>
                    </v-col>     
                    <v-col cols="12" md="4" sm="6"  class="pt-0 pb-0">
                        <BaseInput color="primary" v-model="addressUserSecond" label="addressUserSecond" prepend-inner-icon="mdi-account" autocomplete="null"/>            
                    </v-col>
                    <v-col cols="12" md="4" sm="6"  class="pt-0 pb-0">
                        <BaseInput class="mt-0" color="primary" v-model="descriptionUser" label="descriptionUser" prepend-inner-icon="mdi-account" autocomplete="null"/>
                    </v-col>  
                    <v-col cols="12" md="4" sm="6"  class="pt-0 pb-0">
                        <BaseInput color="primary" v-model="categoryUser" label="Categoria User" prepend-inner-icon="mdi-map-marker" density="compact"/>
                    </v-col>   
                </v-row>      
                       
                <div class="d-flex justify-center mt-3">
                    <v-btn color="success" class="me-4" type="submit"> agregar </v-btn>

                    <v-btn color="warning"> clear </v-btn>
                </div>
                    
            </form>
            
        </v-card-text>
    </v-card>
</template>
<script setup>
    import BaseInput from '@/components/commons/BaseInput.vue';

    import { ref } from 'vue'
  
    const firstName = ref("");
    const lastName = ref("");
    const addressUser = ref("");
    const addressUserSecond = ref("");
    const descriptionUser = ref("");
    const categoryUser = ref("");
    
</script>

<script>
export default {
    
}
</script>