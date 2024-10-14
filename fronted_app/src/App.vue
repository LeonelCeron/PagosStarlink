<script setup>
import { RouterView } from 'vue-router'
import useStore from './store'
const userStore = useStore()  
</script>

<template>
<!--
  <header>
    <pre>{{ userStore.user }}</pre>
  </header>
-->

<RouterView />

</template>