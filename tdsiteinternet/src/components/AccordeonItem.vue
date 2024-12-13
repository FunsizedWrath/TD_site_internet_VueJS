<template>
  <div class="accordeon-item" :class="{ active: isOpen }">
    <!-- si on click on active la méthode toggle -->
    <div class="accordeon-header" @click="toggle">
      <slot name="header"></slot>
      <!-- si isopen est vrai - si fermé + -->
      <span class="toggle-symbol">{{ isOpen ? '-' : '+' }}</span>
    </div>
    <!-- v-if pour afficher le contenu si isopen -->
    <div class="accordeon-content" v-if="isOpen">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
// accordeon par default fermé
export default {
  name: 'AccordeonItem',
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    // méthode pour ouvrir ou fermer l'accordeon
    toggle() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style scoped>
.accordeon-item {
  margin-top: 30px;
  margin-bottom: 10px;
}

.accordeon-header {
  background-color: #dddddd;
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.toggle-symbol {
  font-size: 20px;
  font-weight: bold;
}

.accordeon-content {
  padding: 10px;
  background-color: #f4f4f4;
}

.accordeon-item.active .accordeon-content {
  margin-bottom: 20px;
}
</style>