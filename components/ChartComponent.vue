<template>
    <div>
      <Bar :data="chartData" :options="chartOptions" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineComponent, ref } from 'vue'
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  // Register components and options for Chart.js
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  // Define the data and options for the chart
  const chartData = ref({
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
    datasets: [
      {
        label: 'Estadisticas',
        backgroundColor: '#42A5F5',
        data: [1616336, 995440, 1799143, 2709183, 2674939, 2413572,4550508,5966128,9780582,12954964,6887657,5500000]
      }
    ]
  })
  
  const chartOptions = ref({
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            return `${context.dataset.label}: ${context.raw}`
          }
        }
      }
    }
  })
  </script>
  
  <style scoped>
  /* Your styles here */
  </style>
  