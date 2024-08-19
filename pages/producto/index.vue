
<template>
    <VContainer >
        <h2 class="text-center">Productos</h2>
        <VRow>
            <VCol >
                <VBtn 
                icon="mdi-plus"
                @click="navigateTo('/producto/formularioProducto')"

                
                />
               
               
            </VCol>
        </VRow>
        <VRow>
            <VCol>
                    <VTable class="pt-5 text-center">
                        <thead>
                            <th>
                                Nombre
                            </th>
                            <th>
                                Precio
                            </th>
                            <th>
                                Descripcion
                            </th>
                            <th>
                                Imagen
                            </th>
                            <th>
                                Acciones
                            </th>
                        </thead>
                        <tbody>
                            <tr v-for="producto in productos" :key="producto._id">
                                <td>{{producto.nombre}}</td>
                                <td>{{producto.precio}}</td>
                                <td>{{producto.descripcion}}</td>
                                <td>
                                    <VImg 
                    :src="getImageSrc(producto.imagen)" 
                    width="50" 
                    height="50"
                    lazy-src="/assets/img/loading.jpg"
                    contain
                  />
                                </td>
                                <td>
                                    <VBtn variant="text" color="warning" icon="mdi-pencil" @click="navigateTo(`/formularioProducto/${producto._id}`)"/>
                                    <VBtn variant="text" color="error" icon="mdi-delete" @click="eliminar(producto._id)"/>
                                </td>
                            
                            </tr>

                        </tbody>

                    </VTable>
            </VCol>
        </VRow>
    </VContainer>
</template>
<script setup lang="ts">

import { storeToRefs } from 'pinia';

const ProductoStore = useProductoStore()
const {productos}=storeToRefs(ProductoStore)

const {obtener,eliminar}=ProductoStore

await obtener()

const getImageSrc = (image: string) => {
  if (!image) {
    return '/assets/img/imagen-generica.jpg';
  }

  const isUrl = image.startsWith('http://') || image.startsWith('https://');

  if (isUrl) {
    return image;
  } else {
    // Ruta completa al archivo en el sistema de archivos
    const imagePath = `./assets/img/${image}`;

    // Verifica si el archivo existe
    try {
      fs.accessSync(imagePath, fs.constants.F_OK);
      // El archivo existe, devuelve su ruta relativa
      return `/assets/img/${image}`;
    } catch (err) {
      // El archivo no existe, devuelve la imagen genérica
      return '/assets/img/imagen-generica.jpg';
    }
  }
};

</script>
