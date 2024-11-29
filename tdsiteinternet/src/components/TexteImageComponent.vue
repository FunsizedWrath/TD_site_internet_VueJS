<template>
    <div>
        <h1>Mon Composant</h1>
        <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_640.jpg" alt="Placeholder" />
        <p>{{ message }}</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCLgkClCDXpCTFNmbz7Mnzaq6xzL_xTXOBmg&s" alt="Placeholder" />
        <p>{{ message }}</p>

    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'Hello World',
        };
}
};
</script>

<style scoped>
</style>