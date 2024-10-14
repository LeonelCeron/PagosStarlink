<template>
    <v-text-field
        density="compact"
        :label="label"
        :value="modelValue"
        @input= "$emit('update:modelValue', $event.target.value)"
        v-bind="$attrs"
        variant="outlined"
        >
    </v-text-field>
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