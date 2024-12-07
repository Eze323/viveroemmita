<template>
  <VApp>
    <VAppBar app>
      <template v-slot:prepend>
        <VAppBarNavIcon @click="drawer = !drawer" />
      </template>
      <template v-slot:title>
        <span>Vivero Emmita</span>
      </template>
    </VAppBar>

    <VNavigationDrawer v-model="drawer" app>
      <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="Ezequiel Irace" nav>
        <template v-slot:append>
          <v-btn icon="mdi-chevron-left" variant="text" @click="drawer = !drawer"></v-btn>
        </template>
      </v-list-item>
      
      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          v-for="item in navigationItems"
          :key="item.value"
          :prepend-icon="item.icon"
          :title="item.title"
          :value="item.value"
          :to="item.to"
        ></v-list-item>
      </v-list>
    </VNavigationDrawer>

    <VMain>
      <NuxtPage/>
    </VMain>
  </VApp>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const drawer = ref(false);

const navigationItems = [
  { title: 'Home', icon: 'mdi-home-city', value: 'home', to: '/' },
  { title: 'Mi perfil', icon: 'mdi-account', value: 'profile', to: '/profile' },
  // { title: 'Usuarios', icon: 'mdi-account-group-outline', value: 'users', to: '/#' },
  { title: 'Productos', icon: 'mdi-cube', value: 'producto', to: '/producto' },
  { title: 'Categorías', icon: 'mdi-tag', value: 'categoria', to: '/categoria' },
  { title: 'Facturas', icon: 'mdi-receipt', value: 'factura', to: '/factura' },
  { title: 'Ingresos Diarios', icon: 'mdi-plus', value: 'ingresos', to: '/ingresosdiarios' },
  // { title: 'Configuración', icon: 'mdi-cog', value: 'configuracion', to: '/#' },
  // { title: 'Ayuda', icon: 'mdi-help-circle', value: 'ayuda', to: '/#' }
];
</script>

<style scoped>
/* Add your styles here if needed */
</style>

  