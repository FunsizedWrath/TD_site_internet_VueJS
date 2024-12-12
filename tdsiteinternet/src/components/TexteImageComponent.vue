<template>
    <div id="container">
        <div id="img">
            <img v-bind:src="img" alt="Placeholder" v-bind:height="height"/>
        </div>
        <div id="txt">
            <p>{{ message }}</p>
        </div>
    </div>
</template>

<script>
export default {
  props: ['message', 'img', 'height'],
  setup(props) {
    console.log(props.message)
  }
}
</script>

<style scoped>
#container {
    display: flex;
    align-items: center;
    margin: 10px;
    border: 1px solid black;
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