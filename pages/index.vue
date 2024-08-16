<template>
    <v-container fluid>
        
        
              <v-row>
                <v-col cols="12" md="6">
                  <v-card>
                    <v-card-title>Dashboard Overview</v-card-title>
                    <v-card-text>
                      <ChartComponent />
                    </v-card-text>
                  </v-card>
                </v-col>
                <!-- Puedes agregar más componentes gráficos o tarjetas aquí -->
              </v-row>
          
          
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-card>
            <v-card-title>Product 1</v-card-title>
            <v-card-text>
              Description of product 1
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary">Action</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
  
        <v-col cols="12" sm="6" md="4">
          <v-card>
            <v-card-title>Product 2</v-card-title>
            <v-card-text>
              Description of product 2
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary">Action</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
  
        <v-col cols="12" sm="6" md="4">
          <v-card>
            <v-card-title>Product 3</v-card-title>
            <v-card-text>
              Description of product 3
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary">Action</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style scoped>
  /* Your component's styles here */
  </style>
  