<template>
<div class="ml-8 mr-8">
    <v-card variant="text">
        <v-card-title class="text-overline font-weight-bold">
            <v-row>
                <v-col cols="6"  md="6" sm="12">
                    <h2>
                        <v-icon :icon="icon"></v-icon>
                        {{ title }}
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
            <slot></slot>
        </v-card-text>
    </v-card>
</div>

</template>

<script setup>
    const props = defineProps({
        icon: String,
        title: String,
    });
</script>