<script>
import axios from 'axios';

export default {
  data() {
    return {
      pokemon: null,
    };
  },
  props: ['id'],
  async created() {
    const response = await axios.get(`https://pokebuildapi.fr/api/v1/pokemon/${this.$route.params.id}`);
    this.pokemon = response.data;
  },
  methods: {
    translateStat(stat) {
      const translations = {
        HP: 'PV',
        attack: 'Attaque',
        defense: 'Défense',
        special_attack: 'Attaque spéciale',
        special_defense: 'Défense spéciale',
        speed: 'Vitesse',
      };
      return translations[stat] || stat;
    },
  },
};
</script>

<template>
    <div class="pokemon-details">
        <h1>{{ pokemon.name }}</h1>
        <img :src="pokemon.image" alt="pokemon image">
        <div class="pokemon-stats">
            <h2>Stats</h2>
            <div v-for="(value, key) in pokemon.stats" :key="key" class="stat"><p>{{ translateStat(key) }}: {{ value }}</p></div>
        </div>
        <div class="pokemon-types">
            <h2>Types</h2>
            <div v-for="type in pokemon.apiTypes" :key="type.name" class="type">
                <img :src="type.image" :alt="type.name">
                <p>{{ type.name }}</p>
            </div>
        </div>
    </div>
</template>
  
<style scoped>

h2 {
  font-size: 1.5rem;
  font-weight: bold;
}
.pokemon-details {
  width: 300px;
  margin: auto;
  text-align: center;
}

.pokemon-details img {
  width: 100%;
}

.type {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

.pokemon-stats {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;
  margin-top: 20px;
  gap: 10px;
}

.pokemon-stats .stat {
  flex: 1 0 auto;
}

.pokemon-types {
  margin-top: 20px;
}

.pokemon-types img {
  width: 50px;
  height: 50px;
}
</style>