<template>
  <div class="api-component">
    <h2>API Request</h2>
    <div class="api-container">
      <form @submit.prevent="fetchData" class="api-form">
        <div class="form-group">
          <label for="apiUrl">API URL:</label>
          <input type="text" id="apiUrl" v-model="apiUrl" required />
        </div>
        <div class="form-group">
          <label for="method">Method:</label>
          <select id="method" v-model="method">
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>
        </div>
        <div class="form-group">
          <label for="params">Parameters (JSON format):</label>
          <textarea id="params" v-model="params"></textarea>
        </div>
        <button type="submit">Send Request</button>
      </form>
      <div class="result">
        <h3>Result:</h3>
        <div v-if="result">
          <pre>{{ result }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apiUrl: '',
      method: 'GET',
      params: '',
      result: null
    };
  },
  methods: {
    async fetchData() {
      try {
        const options = {
          method: this.method,
          headers: {
            'Content-Type': 'application/json'
          }
        };

        if (this.method !== 'GET' && this.params) {
          options.body = this.params;
        }

        const response = await fetch(this.apiUrl, options);
        const data = await response.json();
        this.result = JSON.stringify(data, null, 2);
      } catch (error) {
        this.result = `Error: ${error.message}`;
      }
    }
  }
};
</script>

<style scoped>
.api-component {
  max-width: 1200px;
  margin: 0 auto;
}

.api-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.api-form {
  flex: 1;
}

.result {
  flex: 1;
  max-height: 300px; /* Limite la hauteur maximale */
  overflow: auto; /* Ajoute une barre de défilement si nécessaire */
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input, select, textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

pre {
  background-color: #f4f4f4;
  padding: 10px;
  border: 1px solid #ddd;
  white-space: pre-wrap; /* Permet de gérer les longues lignes */
  word-wrap: break-word; /* Permet de gérer les longues lignes */
}
</style>