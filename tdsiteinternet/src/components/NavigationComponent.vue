<template>
    <div class="navigation">
      <button @click="navigateTo('accueil')">Accueil</button>
      <button >API</button>
      <button >Contact</button>
      <button ></button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NavigationComponent',
    methods: {
      navigateTo(page) {
        if (this.$route.name !== page) {
          this.$router.push({ name: page });
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .navigation {
    display: flex;
    gap: 10px;
  }
  
  button {
    padding: 10px 20px;
    cursor: pointer;
  }
  </style>