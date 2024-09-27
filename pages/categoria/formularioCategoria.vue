<template>
    <VContainer class="centrar">
        <VCard class="ma-auto" width="450">
            <VCardTitle class="text-center">Agregar Categoria</VCardTitle>
            <VCardText>
                <VForm @submit.prevent="procesarFormulario" ref="form" v-model="valid">
                    <VTextField
                        v-model="campos.nombre"
                        :rules="[rules.requerido]"
                        required
                        label="Nombre"
                    />
                    <VTextField
                        v-model="campos.descripcion"
                        :rules="[rules.requerido]"
                        required
                        label="Descripcion"
                    />
                    <VTextField
                        v-model="campos.icono"
                        label="Icono"
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
  const { agregar } = useCategoriaStore()
  
  const campos = reactive({
    nombre: '',
    descripcion: '',
    icono: ''
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
      descripcion: campos.descripcion,
      icono: campos.icono || ''
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
  