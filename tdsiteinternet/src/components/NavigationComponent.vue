<template>
  <div class="navigation">
    <button @click="navigateTo('accueil')">Accueil</button>
    <button @click="navigateTo('api')">API</button>
    <button @click="navigateTo('contact')">Contact</button> <!-- Nouveau bouton -->
    <button></button>
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

.navigation{
  gap: 10px;
  justify-content: center;
}
</style>