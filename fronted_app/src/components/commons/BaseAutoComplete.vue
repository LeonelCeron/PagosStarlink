<template lang="">
    <v-autocomplete
        clearable
        :label="label"
        @input= "$emit('update:modelValue', $event)"
        v-bind="$attrs"
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        variant="outlined"
    ></v-autocomplete>
    
</template>
<script setup>
    defineProps({ 
        label: {
            type: [String, Boolean],
            default: true,
        },
        modelValue: {
            type: String,
            default: "",
        },
    });
</script>