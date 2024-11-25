<template>
    <div>
        <div>
            <label for="apiUrl">URL API :</label>
            <input type="text" v-model="apiUrl" id="apiUrl" />
        </div>
        <div>
            <label for="method">Méthode :</label>
            <select v-model="method" id="method">
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
            </select>
        </div>
        <div>
        <label for="params">Paramètres :</label>
        <input type="text" v-model="params" id="params" />
        </div>
        <div>
            <button @click="fetchData">Transmettre</button>
        </div>
        <div v-if="result">
            <h3>Résultat :</h3>
            <pre>{{ result }}</pre>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            apiUrl: '',
            method: 'GET',
            result: null
        };
    },
    methods: {
        async fetchData() {
            try {
                const response = await fetch(this.apiUrl, { method: this.method });
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
/* Add your styles here */
</style></div>