<!-- <template>
    <VApp>
      <VAppBar app>
        <template v-slot:prepend>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </template>
        <template v-slot:title>
          <span>Vivero Emmita</span>
        </template>
        <template v-slot:append>
          <v-btn icon="mdi-heart"></v-btn>
          <v-btn icon="mdi-magnify"></v-btn>
          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
      </VAppBar>
      
      <v-navigation-drawer v-model="drawer" app>
        <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="Ezequiel Irace" nav>
          <template v-slot:append>
            <v-btn icon="mdi-chevron-left" variant="text" @click="drawer = !drawer"></v-btn>
          </template>
        </v-list-item>
        
        <v-divider></v-divider>
        
        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home-city" title="Home" value="home" to="/"></v-list-item>
          <v-list-item prepend-icon="mdi-account" title="Mi Cuenta" value="account"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group-outline" title="Usuarios" value="users"></v-list-item>
          <v-list-item prepend-icon="mdi-cube" title="Productos" value="productos" to="/producto/"></v-list-item>
          <v-list-item prepend-icon="mdi-tag" title="Categorias" value="categorias" ></v-list-item>
          <v-list-item prepend-icon="mdi-receipt" title="Facturas" value="facturas" ></v-list-item>
          <v-list-item prepend-icon="mdi-cog" title="Configuraciones" value="configuraciones"></v-list-item>
          <v-list-item prepend-icon="mdi-help-circle" title="Ayuda" value="ayuda"></v-list-item>


        </v-list>
      </v-navigation-drawer>
      
      <VMain>
        <NuxtPage/>
      </VMain>
    </VApp>
  </template>
  
  <script>
  export default {
    data() {
      return {
        drawer: true,
        rail: true,
      }
    },
  }
  </script>
  
  <script setup lang="ts">
  </script>
  
  <style scoped>
  /* Your component's styles here */
  </style>
   -->

   <template>
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
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home" to="/"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="Mi perfil" value="account" to="/profile"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Usuarios" value="users"></v-list-item>
            <v-list-item prepend-icon="mdi-cube" title="Producto" value="producto" to="/producto/"></v-list-item>
            <v-list-item prepend-icon="mdi-tag" title="Categoria" value="categoria" to="/categoria"></v-list-item>
            <v-list-item prepend-icon="mdi-receipt" title="Factura" value="factura" to="/factura"></v-list-item>
            <v-list-item prepend-icon="mdi-cog" title="Configuracion" value="configuracion"></v-list-item>
            <v-list-item prepend-icon="mdi-help-circle" title="Ayuda" value="ayuda"></v-list-item>
  
  
          </v-list>
    
    </VNavigationDrawer>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const drawer = ref(false);
  
  const items = [
    { title: 'Home', icon: 'mdi-home', to: '/' },
    { title: 'Productos', icon: 'mdi-package-variant-closed', to: '/productos' },
    { title: 'Categorías', icon: 'mdi-shape', to: '/categorias' },
    { title: 'Clientes', icon: 'mdi-account', to: '/clientes' },
    { title: 'Pedidos', icon: 'mdi-cart', to: '/pedidos' },
    { title: 'Facturas', icon: 'mdi-file-document', to: '/facturas' },
  ];
  
  const router = useRouter();
  
  const navigate = (to: string) => {
    router.push(to);
  };
  </script>
  
  <style scoped>
  /* Aquí puedes añadir estilos específicos si lo necesitas */
  </style>
  