<!-- <template>
    <VContainer class="centrar">
        
        <VCard class="ma-auto" width="450">
            <VCardTitle class="text-center">Agregar Producto</VCardTitle>
           <VCardText>
            <VForm @submit.prevent="procesarFormulario" ref="form" v-model="valid">
                <VTextField
                v-model="campos.nombre"
                required
                label="Nombre">
            </VTextField>
            <VTextField
            v-model="campos.precio"
            required
            label="Precio">
            </VTextField>
            <VTextField
            v-model="campos.descripcion"
            required
            label="Descripcion">
            </VTextField>
            <VTextField
            v-model="campos.imagen"
            
            label="Imagen">
            </VTextField>
            <VBtn
            variant="tonal"
            color="success"
            type="submit"
            :loading="cargando"
            :disabled="cargando || !valid"
            block

            
            
            >
            Guardar
            </VBtn>
            <VBtn class="mt-2"
            variant="tonal"
            color="error"
            :disabled="cargando"
            block
            @click="navigateTo('/')"
            >
            Cancelar
            </VBtn>
            
            </VForm>
           </VCardText>
        </VCard>
    </VContainer>
</template>

<script setup lang="ts">

import { ref, reactive } from 'vue';
import { VBtn, VForm, VTextField } from 'vuetify/components';
const { agregar } = useProductoStore()

const campos = reactive({
    nombre: '',
    precio: 0,
    descripcion: '',
    imagen: ''
});
const cargando = ref(false);
const valid = ref(false); // Asegúrate de que esta ref se actualice correctamente basado en la validación del formulario


const procesarFormulario = async () => {
  try {
    cargando.value = true;
    await agregar({
      nombre: campos.nombre,
      precio: campos.precio,
      descripcion: campos.descripcion,
      imagen: campos.imagen || '' // Usa una cadena vacía si imagen está vacío
    });
    // Aquí puedes agregar una notificación de éxito o redirigir al usuario
  } catch (error) {
    console.error("Error al guardar los datos:", error);
    // Aquí puedes manejar el error, por ejemplo, mostrando un mensaje al usuario
  } finally {
    cargando.value = false;
  }
};

</script>

<style scoped>
.centrar{
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
/* Add your custom styles here */
</style> -->


<template>
  <VContainer class="centrar">
      <VCard class="ma-auto" width="450">
          <VCardTitle class="text-center">Agregar Producto</VCardTitle>
          <VCardText>
              <VForm @submit.prevent="procesarFormulario" ref="form" v-model="valid">
                  <VTextField
                      v-model="campos.nombre"
                      :rules="[rules.requerido]"
                      required
                      label="Nombre"
                  />
                  <VTextField
                      v-model="campos.precio"
                      :rules="[rules.requerido]"
                      required
                      label="Precio"
                  />
                  <VTextField
                      v-model="campos.descripcion"
                      :rules="[rules.requerido]"
                      required
                      label="Descripcion"
                  />
                  <VTextField
                      v-model="campos.imagen"
                      label="Imagen"
                  />
                  <VBtn
                      variant="tonal"
                      color="success"
                      type="submit"
                      :loading="cargando"
                      :disabled="cargando || !valid"
                      block
                  >
                      Guardar
                  </VBtn>
                  <VBtn
                      class="mt-2"
                      variant="tonal"
                      color="error"
                      :disabled="cargando"
                      block
                      @click="navigateTo('/')"
                  >
                      Cancelar
                  </VBtn>
              </VForm>
          </VCardText>
      </VCard>
  </VContainer>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { VBtn, VForm, VTextField } from 'vuetify/components';
const { agregar } = useProductoStore()

const campos = reactive({
  nombre: '',
  precio: 0,
  descripcion: '',
  imagen: ''
});
const cargando = ref(false);
const valid = ref(false);

const rules = {
  requerido: (value: string) => !!value || 'Este campo es requerido',
};

const procesarFormulario = async () => {
if (!valid.value) {
  return;
}

try {
  cargando.value = true;
  await agregar({
    nombre: campos.nombre,
    precio: campos.precio,
    descripcion: campos.descripcion,
    imagen: campos.imagen || ''
  });
  // Aquí puedes agregar una notificación de éxito o redirigir al usuario
} catch (error) {
  console.error("Error al guardar los datos:", error);
  // Aquí puedes manejar el error, por ejemplo, mostrando un mensaje al usuario
} finally {
  cargando.value = false;
}
};
</script>

<style scoped>
.centrar {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
