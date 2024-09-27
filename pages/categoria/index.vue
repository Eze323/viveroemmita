<template>
 <VContainer >
        <h2 class="text-center">Categorias</h2>
        <VRow>
            <VCol >
                <VBtn 
                icon="mdi-plus"
                @click="navigateTo('/categoria/formularioCategoria')"

                
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
                                Descripcion
                            </th>
                            <th>
                                Icono
                            </th>
                            <th>
                                Acciones
                            </th>
                        </thead>
                        <tbody>
                            <tr v-for="categoria in categorias" :key="categoria._id">
                                <td>{{categoria.nombre}}</td>
                                <td>{{categoria.descripcion}}</td>
                                <td>{{categoria.icono}}</td>
                                
                                <td>
                                    <VBtn variant="text" color="warning" icon="mdi-pencil" @click="navigateTo(`/formularioCategoria/${categoria._id}`)"/>
                                    <VBtn variant="text" color="error" icon="mdi-delete" @click="eliminar(categoria._id)"/>
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
import { useCategoriaStore } from '~/stores/categorias';

const CategoriaStore = useCategoriaStore()
const {categorias}=storeToRefs(CategoriaStore)

const {obtener,eliminar}=CategoriaStore

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
