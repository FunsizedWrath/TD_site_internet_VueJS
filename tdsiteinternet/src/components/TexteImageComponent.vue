<template>
    <div id="container">
        <div id="img">
            <img v-bind:src="img" alt="Placeholder" />
        </div>
        <div id="txt">
            <p>{{ message }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            img: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_640.jpg',
            message: 'Hello World',
        };
}
};
</script>

<style scoped>
#container {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    margin: 10px;
}

#img {
    float: right;
    width: 50%;
    padding: 10px;
    order: 2;
}

#txt {
    float: left;
    width: 50%;
    padding: 10px;
    order: 1;
}
</style>