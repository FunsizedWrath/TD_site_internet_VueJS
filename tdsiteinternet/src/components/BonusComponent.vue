<template>
  <div class="accordeonzone">
    <h2>Random Pokemon</h2>
    <AccordeonItem>
      <template #header>
        <h3>Pokemons</h3>
      </template>
      <template #content>
        <!-- creation d'un container qui affiche tout les pokemons d'un tableau -->
        <div class="pokemon-container" v-if="pokemons.length">
          <div class="pokemon" v-for="pokemon in pokemons" :key="pokemon.id">
            <!-- affichage du nom du pokemon en majuscule -->
            <p>{{ toUpperCase(pokemon.name) }}</p>
            <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
          </div>
        </div>
        <!-- si pas de pokemons, afficher loading -->
        <div v-else>
          <p>Loading...</p>
        </div>
      </template>
    </AccordeonItem>

    <h2>Chuck Norris Joke</h2>
    <AccordeonItem>
      <template #header>
        <h3>Joke</h3>
      </template>
      <template #content>
        <!-- affichage blague de chucknorris -->
        <div v-if="chuckJoke">
          <p>{{ chuckJoke }}</p>
        </div>
        <!-- loading si pas de blague -->
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
      pokemons: [],
      chuckJoke: null
    };
  },
  created() {
    this.fetchRandomPokemons();
    this.fetchChuckNorrisJoke();
  },
  methods: {
    async fetchRandomPokemons() {
      // creation d'un tableau vide
      const tab = [];
      // boucle pour recuperer 3 pokemons aleatoires
      for (let i = 0; i < 3; i++) {
        const randomId = Math.floor(Math.random() * 898) + 1;
        tab.push(fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`).then(response => response.json()));
      }
      // recuperation des pokemons
      this.pokemons = await Promise.all(tab);
    },
    // fetch de la blague de chucknorris
    async fetchChuckNorrisJoke() {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();
      this.chuckJoke = data.value;
    },
    // fonction pour mettre en majuscule
    toUpperCase(str) {
      return str.toUpperCase();
    }
  }
};
</script>

<style scoped>
.accordeonzone {
  padding: 30px;
  box-sizing: border-box;
}

.pokemon-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.pokemon {
  text-align: center;
}

.accordeon-header {
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