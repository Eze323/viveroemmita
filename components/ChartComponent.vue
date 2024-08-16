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
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        backgroundColor: '#42A5F5',
        data: [40, 39, 10, 40, 39, 80, 40]
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
  