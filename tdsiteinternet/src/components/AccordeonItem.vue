<template>
  <div class="accordeon-item" :class="{ active: isOpen }">
    <div class="accordeon-header" @click="toggle">
      <slot name="header"></slot>
      <span class="toggle-symbol">{{ isOpen ? '-' : '+' }}</span>
    </div>
    <div class="accordeon-content" v-if="isOpen">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccordeonItem',
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
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