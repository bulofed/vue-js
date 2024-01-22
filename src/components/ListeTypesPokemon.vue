<template>
    <div class="listeTypes">
      <div v-for="(typeData, typeName) in countPokemonByType()" :key="typeName">
        <img :src="typeData.image" :alt="typeName" class="imgType" />
        <p>{{ typeData.count }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['pokemonList'],
    methods: {
      countPokemonByType() {
        const typeCounts = {};
        this.pokemonList.forEach(pokemon => {
          pokemon.apiTypes.forEach(type => {
            if (typeCounts[type.name]) {
              typeCounts[type.name] = { count: (typeCounts[type.name]?.count || 0) + 1, image: type.image };
            } else {
              typeCounts[type.name] = { count: 1, image: type.image };
            }
          });
        });
        return typeCounts;
      },
    }
  }
  </script>

<style scoped>
    .listeTypes {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px;
        padding: 10px;
        border: 3px solid rgb(21, 21, 21);
        background: #313131;
        gap: 10px;
        border-radius: 10px;
    }

    .imgType {
        width: 50px;
        height: 50px;
    }
</style>