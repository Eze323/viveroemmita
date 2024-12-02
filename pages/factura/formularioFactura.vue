<template>
  <div class="factura-container">
    <h2>Nueva Factura</h2>
    
    <form @submit.prevent="guardarFactura">
      <div class="form-group">
        <label>Número de Factura:</label>
        <input v-model="factura.numeroFactura" required type="text">
      </div>

      <div class="form-group">
        <label>Fecha:</label>
        <input v-model="factura.fecha" type="date" required>
      </div>

      <div class="form-group">
        <label>Cliente:</label>
        <select v-model="factura.clienteId" required>
          <option v-for="cliente in clientes" :key="cliente.id" :value="cliente.id">
            {{ cliente.nombre }}
          </option>
        </select>
      </div>

      <!-- Items de la factura -->
      <div class="items-container">
        <h3>Items</h3>
        <div v-for="(item, index) in factura.items" :key="index" class="item-row">
          <input v-model="item.producto" placeholder="Producto">
          <input v-model.number="item.cantidad" type="number" min="1">
          <input v-model.number="item.precioUnitario" type="number" step="0.01">
          <span>{{ calcularSubtotal(item) }}</span>
          <button type="button" @click="eliminarItem(index)">Eliminar</button>
        </div>
        <button type="button" @click="agregarItem">Agregar Item</button>
      </div>

      <div class="total">
        <h3>Total: {{ calcularTotal }}</h3>
      </div>

      <button type="submit" :disabled="!esValidaFactura">Guardar Factura</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useFacturaStore } from '@/stores/facturaStore'

const facturaStore = useFacturaStore()

const factura = ref({
  numeroFactura: '',
  fecha: new Date().toISOString().split('T')[0],
  clienteId: 0,
  items: [],
  total: 0,
  estado: 'pendiente'
})

const clientes = ref([
  // Aquí irían tus clientes, normalmente los cargarías desde una API
  { id: 1, nombre: 'Cliente 1' },
  { id: 2, nombre: 'Cliente 2' },
])

const agregarItem = () => {
  factura.value.items.push({
    producto: '',
    cantidad: 1,
    precioUnitario: 0,
    subtotal: 0
  })
}

const eliminarItem = (index: number) => {
  factura.value.items.splice(index, 1)
}

const calcularSubtotal = (item) => {
  return item.cantidad * item.precioUnitario
}

const calcularTotal = computed(() => {
  return factura.value.items.reduce((total, item) => {
    return total + (item.cantidad * item.precioUnitario)
  }, 0)
})

const esValidaFactura = computed(() => {
  return factura.value.numeroFactura &&
         factura.value.fecha &&
         factura.value.clienteId &&
         factura.value.items.length > 0
})

const guardarFactura = async () => {
  try {
    factura.value.total = calcularTotal.value
    await facturaStore.guardarFactura(factura.value)
    // Limpiar el formulario después de guardar
    factura.value = {
      numeroFactura: '',
      fecha: new Date().toISOString().split('T')[0],
      clienteId: 0,
      items: [],
      total: 0,
      estado: 'pendiente'
    }
  } catch (error) {
    console.error('Error al guardar:', error)
  }
}
</script>

<style scoped>
.factura-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.items-container {
  margin: 20px 0;
}

.item-row {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 80px;
  gap: 10px;
  margin-bottom: 10px;
}

.total {
  text-align: right;
  margin: 20px 0;
}

button {
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

input, select {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
}
</style>