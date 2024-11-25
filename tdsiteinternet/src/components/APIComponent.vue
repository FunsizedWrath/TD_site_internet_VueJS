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
.contact-form {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input,
textarea {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}

button {
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>