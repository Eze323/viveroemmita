<template>
  <div>
    <!-- Renderiza el gráfico solo cuando `chartOption` esté completamente configurado -->
   <client-only>
    <v-chart v-if="isChartReady" class="chart" :option="chartOption" />
  </client-only>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import type { PropType } from 'vue'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart } from 'echarts/charts'
import { GridComponent, TooltipComponent, LegendComponent } from 'echarts/components'
import VChart from 'vue-echarts'

// Registramos los componentes de ECharts
use([CanvasRenderer, LineChart, GridComponent, TooltipComponent, LegendComponent])

// Props para determinar el período
const props = defineProps({
  period: {
    type: String as PropType<'daily' | 'weekly' | 'monthly'>,
    required: true
  }
})

// Configuración inicial del gráfico
const chartOption = ref({
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    type: 'category',
    data: [] // Inicializamos vacío
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [],
    type: 'line',
    name: 'Ingresos'
  }]
})

// Computed para verificar si el gráfico está listo
const isChartReady = computed(() => 
  chartOption.value.xAxis.data.length > 0 && chartOption.value.series[0].data.length > 0
)

// Función para cargar los datos según el período
const loadData = async (period: string) => {
  try {
    // Datos simulados (reemplázalos con una llamada real a tu API)
    const mockData = {
      daily: {
        labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
        values: [1000, 1200, 900, 1500, 2000, 1800, 1600]
      },
      weekly: {
        labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
        values: [8000, 9500, 8700, 10000]
      },
      monthly: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
        values: [35000, 32000, 40000, 38000, 42000, 45000]
      }
    }[period]

    if (!mockData) {
      throw new Error('Período no válido')
    }

    // Actualizamos las opciones del gráfico
    chartOption.value.xAxis.data = mockData.labels
    chartOption.value.series[0].data = mockData.values
  } catch (error) {
    console.error('Error al cargar los datos:', error)
  }
}

// Observa cambios en `props.period` y carga los datos
watch(() => props.period, (newPeriod) => {
  loadData(newPeriod)
}, { immediate: true })
</script>

<style scoped>
.chart {
  height: 400px;
  width: 100%;
}
</style>
