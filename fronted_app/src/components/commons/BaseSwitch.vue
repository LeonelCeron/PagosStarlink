<template lang="">
    <v-switch
        :label=" label + `${modelValue}`"
        v-model="internalValue"
        @change="$emit('update:modelValue', internalValue)"
        v-bind="$attrs"
        hide-details
        inset
    ></v-switch>
</template>
<script setup>

import { ref, watch } from 'vue';

// Definir las props que el componente recibirá
const props = defineProps({
    label: {
        type: String,
        default: "",
    },
    modelValue: {
        type: Boolean,
        default: false,
    }
});

// Emitir el evento
const emit = defineEmits(['update:modelValue']);

// Variable interna para manejar el valor del switch
const internalValue = ref(props.modelValue);

// Sincroniza cuando cambia el valor del switch externo
watch(() => props.modelValue, (newVal) => {
    internalValue.value = newVal;
});

// Emitir el cambio cuando el valor interno cambia
watch(internalValue, (newVal) => {
    emit('update:modelValue', newVal);
});
</script>