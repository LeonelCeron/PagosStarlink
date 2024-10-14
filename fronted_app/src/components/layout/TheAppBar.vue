<template>
    <v-app-bar color="primary" prominent>
        <v-app-bar-nav-icon
            variant="text"
            @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-toolbar-title>Pagos Starlink</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon="mdi-dots-vertical" variant="text"  @click="logout"></v-btn>
        <v-menu location="bottom">
          <template v-slot:activator="{ props }">
            <v-btn color="white"  icon="mdi-dots-vertical" dark v-bind="props"></v-btn>
          </template>

          <v-list>
            <v-list-item v-for="(item, index) in itemsMenuSecundario" :key="index" :value="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'bottom' : undefined"      
      >
        <v-list nav>

          <v-list-item
            v-for="(item, i) in itemsMenu"
            :to="item.value" link
            :key="i"
            :value="item"
            color="primary"
          >
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item>
        </v-list>

    </v-navigation-drawer>
</template>
<script>      
import useStore from '@/store'
import { computed } from 'vue';
import { useRouter } from 'vue-router'
export default {
    data: () => ({
      drawer: false,
      group: null,
      itemsMenu: [
        {
          title: 'Home',
          //value: '/',
          value: 'Dashboard',
          icon : 'mdi-home',
        },
        {
          title: 'Clientes',
          value: 'Customer',
          icon : 'mdi-account-multiple-outline',
        },
        {
          title: 'Planes',
          value: 'Product',
          icon : 'mdi-wifi-star',
        },
        {
          title: 'Generar pagos',
          value: 'generar',
          icon : 'mdi-currency-usd',
        },
        {
          title: 'Equipos',
          value: 'equipos',
          icon : 'mdi-router-wireless',
        },
        {
          title: 'Categorias equipo',
          value: 'categoriaEquipo',
          icon : 'mdi-shape-plus-outline',
        },
        {
          title: 'Categorias Empleado',
          value: 'categoriaEmpleado',
          icon : 'mdi-shape-plus-outline',
        },
        {
          title: 'Estados Cliente',
          value: 'estadosCliente',
          icon : 'mdi-list-status',
        },
        {
          title: 'Estados Empleado',
          value: 'estadosEmpleado',
          icon : 'mdi-list-status',
        }
      ],
      
      itemsMenuSecundario: [
        { title: 'Mi perfil' },
        { title: 'Click Me' },
        { title: 'Cerrar sesión' },
      ],
    }),
    setup() { 
      const store = useStore()
      const router = useRouter()

      
      function logout() {
        console.log(store.user);
        store.logout() // Llama a la acción logout
        router.push({ name: 'Login' }) // Redirecciona al 
      } 

      return {
        user: computed(() => store.user.data), // 1
        logout,
      }
    },

    watch: {
      group() {
        this.drawer = false
      },
    },
}
</script>