<template>
    <div class="home">
      <h1>Welcome to SnowChat</h1>
      <div class="container">
        <p>This is the home page of your application</p>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'HomeView',
    components: {},
    setup() {
      return {}
    }
  })
  </script>
  
  <style scoped>
  .home {
    padding: 2rem;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  h1 {
    color: #2c3e50;
    margin-bottom: 2rem;
  }
  </style>