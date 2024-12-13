<template>
  <div class="accordeonzone">
    
    <AccordeonItem>
      <template #header>
        <h2>Random Pokemon</h2>
      </template>
      <template #content>
        <div v-if="pokemon">
          <p>Name: {{ pokemon.name }}</p>
          <img :src="pokemon.sprites.front_default" alt="Pokemon Image">
        </div>
        <div v-else>
          <p>Loading...</p>
        </div>
      </template>
    </AccordeonItem>

    
    <AccordeonItem>
      <template #header>
        <h2>Chuck Norris Joke</h2>
      </template>
      <template #content>
        <div v-if="chuckJoke">
          <p>{{ chuckJoke }}</p>
        </div>
        <div v-else>
          <p>Loading...</p>
        </div>
      </template>
    </AccordeonItem>
  </div>
</template>

<script>
import AccordeonItem from './AccordeonItem.vue';
export default {
  components: {
    AccordeonItem
  },
  data() {
    return {
      pokemon: null,
      chuckJoke: null
    };
  },
  created() {
    this.fetchRandomPokemon();
    this.fetchChuckNorrisJoke();
  },
  methods: {
    // Fetch a random pokemon from the pokeapi
    async fetchRandomPokemon() {
      const randomId = Math.floor(Math.random() * 898) + 1;
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
      const data = await response.json();
      this.pokemon = data;
    },
    // Fetch a random chuck norris joke from the chucknorris api
    async fetchChuckNorrisJoke() {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();
      this.chuckJoke = data.value;
    }
  }
};
</script>

<style scoped>
</style>