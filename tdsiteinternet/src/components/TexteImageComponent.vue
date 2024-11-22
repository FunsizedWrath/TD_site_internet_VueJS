<template>
    <div>
        <h1>Mon Composant</h1>
        <input type="image" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Submit" width="48" height="48">
        <input type="text" v-model="inputValue" placeholder="Tapez quelque chose..."/>
        <p v-show="inputValue">Vous avez tapé : {{ inputValue }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'Hello World',
            inputValue: ''
        };
}
};
</script>

<style scoped>
</style>