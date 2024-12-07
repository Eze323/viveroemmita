<template>
  <div class="ingreso-container">
    <h2>Nuevo Ingreso</h2>
    
    <form @submit.prevent="guardarIngreso">
      <div class="form-group">
        <label>Fecha y Hora:</label>
        <input 
          v-model="ingreso.fechaHora" 
          type="datetime-local" 
          required>
      </div>

      <div class="form-group">
        <label>Monto:</label>
        <input 
          v-model.number="ingreso.monto" 
          type="number" 
          step="0.01" 
          min="0" 
          required>
      </div>

      <div class="form-group">
        <label>Tipo de Ingreso:</label>
        <select v-model="ingreso.tipo" required>
          <option value="efectivo">Efectivo</option>
          <option value="transferencia">Transferencia</option>
        </select>
      </div>

      <!-- Campo adicional para transferencias -->
      <div class="form-group" v-if="ingreso.tipo === 'transferencia'">
        <label>Número de Referencia:</label>
        <input 
          v-model="ingreso.numeroReferencia" 
          type="text"
          :required="ingreso.tipo === 'transferencia'">
      </div>

      <div class="form-group">
        <label>Descripción:</label>
        <textarea 
          v-model="ingreso.descripcion" 
          required 
          rows="3"
          maxlength="200"></textarea>
      </div>

      <button type="submit" :disabled="!esValidoIngreso">Guardar Ingreso</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const ingreso = ref({
  fechaHora: new Date().toISOString().slice(0, 16), // Formato YYYY-MM-DDThh:mm
  monto: 0,
  tipo: 'efectivo',
  numeroReferencia: '',
  descripcion: '',
})

const esValidoIngreso = computed(() => {
  const validacionBasica = 
    ingreso.value.fechaHora && 
    ingreso.value.monto > 0 && 
    ingreso.value.tipo && 
    ingreso.value.descripcion.trim()

  if (ingreso.value.tipo === 'transferencia') {
    return validacionBasica && ingreso.value.numeroReferencia.trim()
  }

  return validacionBasica
})

const guardarIngreso = async () => {
  try {
    // Aquí iría la lógica para guardar en tu store/API
    console.log('Ingreso a guardar:', ingreso.value)
    
    // Limpiar el formulario
    ingreso.value = {
      fechaHora: new Date().toISOString().slice(0, 16),
      monto: 0,
      tipo: 'efectivo',
      numeroReferencia: '',
      descripcion: '',
    }
  } catch (error) {
    console.error('Error al guardar:', error)
  }
}
</script>

<style scoped>
.ingreso-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input, select, textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

textarea {
  resize: vertical;
}

button {
  width: 100%;
  padding: 10px;
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
</style>