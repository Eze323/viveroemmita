<template>
   <VContainer>
        <h2 class="text-h4 font-weight-bold mb-6 primary--text text-center">Ingresos Diarios</h2>
        <VRow justify="end" class="mb-4">
            <VCol cols="auto">
                <VBtn 
                    color="primary"
                    prepend-icon="mdi-plus"
                    @click="navigateTo('/ingresosdiarios/formularioIngreso')"
                    rounded
                >
                    Nuevo Ingreso
                </VBtn>
            </VCol>
        </VRow>
        <VRow>
            <VCol>
                <VCard elevation="2">
                    <VTable class="text-center">
                        <thead>
                            <tr class="bg-primary">
                                <th class="text-white text-center">Fecha</th>
                                <th class="text-white text-center">Monto</th>
                                <th class="text-white text-center">Tipo</th>
                                <th class="text-white text-center">Descripción</th>
                                <th class="text-white text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="ingreso in ingresos" :key="ingreso._id">
                                <td>{{ formatDate(ingreso.fecha) }}</td>
                                <td class="font-weight-bold">${{ formatMonto(ingreso.monto) }}</td>
                                <td>
                                    <VChip :color="getTipoColor(ingreso.tipo)" small>
                                        {{ ingreso.tipo }}
                                    </VChip>
                                </td>
                                <td>{{ ingreso.descripcion }}</td>
                                <td>
                                    <VBtn
                                        variant="text"
                                        color="warning"
                                        icon="mdi-pencil"
                                        size="small"
                                        class="mr-2"
                                        @click="navigateTo(`/formularioIngreso/${ingreso._id}`)"
                                    />
                                    <VBtn
                                        variant="text"
                                        color="error"
                                        icon="mdi-delete"
                                        size="small"
                                        @click="confirmarEliminar(ingreso._id)"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </VTable>
                </VCard>
            </VCol>
        </VRow>
    </VContainer>
</template>

<script setup lang="ts">
definePageMeta({
    pageTransition: {
        name: 'rotate'
    }
  })

import { storeToRefs } from 'pinia';

const IngresoStore = useIngresoStore()
const {ingresos}=storeToRefs(IngresoStore)

const {obtener,eliminar}=IngresoStore

await obtener()

// Funciones de formato y utilidad
const formatDate = (fecha: string) => {
    return new Date(fecha).toLocaleDateString('es-ES')
}

const formatMonto = (monto: number) => {
    return monto.toLocaleString('es-ES', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
}

const getTipoColor = (tipo: string) => {
    const colores = {
        'Venta': 'success',
        'Servicio': 'info',
        'Otro': 'primary'
    }
    return colores[tipo] || 'grey'
}

const confirmarEliminar = async (id: string) => {
    if (confirm('¿Estás seguro de que deseas eliminar este ingreso?')) {
        await eliminar(id)
    }
}
</script>

<style scoped>
.v-table {
    border-radius: 8px;
}

.v-table th {
    font-weight: bold !important;
    text-transform: uppercase;
    font-size: 0.875rem;
}

.v-table td {
    height: 48px;
}
</style>

