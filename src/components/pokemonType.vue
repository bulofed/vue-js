<script>
import axios from 'axios'
export default {
    data() {
        return {
            pokemons: [],
        };
    },
    methods: {
        countPokemonByType() {
            const typeCounts = {};
            this.pokemons.forEach(pokemon => {
                pokemon.apiTypes.forEach(type => {
                    if (typeCounts[type.name]) {
                        typeCounts[type.name]++;
                    } else {
                        typeCounts[type.name] = 1;
                    }
                });
            });
            return typeCounts;
        },
    },
    mounted() {
        axios
            .get('https://pokebuildapi.fr/api/v1/pokemon/limit/20')
            .then((response) => {
                this.pokemons = response.data;
            }, (error) => {
                console.log(error);
            });
    },
}
</script>

<template>
    <div v-for="(count, type) in countPokemonByType()" :key="type" class="type">
        <img :src="getTypeImage(type)" :alt="type" />
        <span>{{ type }} : {{ count }}</span>
    </div>
</template>