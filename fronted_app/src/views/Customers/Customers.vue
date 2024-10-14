<template>
    <BasePage title="Customers test from BasePage.vue" icon="mdi-home"></BasePage>

  <!-- Inicio de data-table -->
  <v-card flat class="ml-10 mr-10">
    <v-card-title class="d-flex align-center pe-2">
      <v-icon icon="mdi-video-input-component"></v-icon> &nbsp; Find a Graphics
      Card

      <v-spacer></v-spacer>

      <v-text-field
        v-model="search"
        density="compact"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="solo-filled"
        flat
        hide-details
        single-line
      ></v-text-field>
    </v-card-title>

    <v-divider></v-divider>
    <v-data-table v-model:search="search" :items="items"> </v-data-table>
  </v-card>
  <!-- Fin de data-table -->


    -
    <v-card class="mx-auto" max-width="328" rounded="lg" border>
    <v-confirm-edit v-model="date">
      <template v-slot:default="{ model: proxyModel, actions }">
        <v-date-picker v-model="proxyModel.value">
          <template v-slot:actions>
            <component :is="actions"></component>
          </template>
        </v-date-picker>
      </template>
    </v-confirm-edit>
  </v-card>
  
</template>
<script>
  import { shallowRef } from 'vue'
  const date = shallowRef()
  import BasePage from '@/components/commons/BasePage.vue';


  export default {
    components: {
      BasePage,
    },
    data: () => ({
      search: '',
      items: [
        {
          name: 'Nebula GTX 3080',
          image: '1.png',
          price: 699.99,
          rating: 5,
          stock: true,
        },
        {
          name: 'Galaxy RTX 3080',
          image: '2.png',
          price: 799.99,
          rating: 4,
          stock: false,
        },
        {
          name: 'Orion RX 6800 XT',
          image: '3.png',
          price: 649.99,
          rating: 3,
          stock: true,
        },
        {
          name: 'Vortex RTX 3090',
          image: '4.png',
          price: 1499.99,
          rating: 4,
          stock: true,
        },
        {
          name: 'Cosmos GTX 1660 Super',
          image: '5.png',
          price: 299.99,
          rating: 4,
          stock: false,
        },
      ],
    }),
  }
</script>