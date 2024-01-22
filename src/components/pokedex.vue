<script>
    import Pokemon from './pokemon.vue';
    import ListeTypesPokemon from './ListeTypesPokemon.vue';
    import axios from 'axios';

    export default {
        components: {
            Pokemon,
            ListeTypesPokemon,
        },
        data() {
            return {
                pokemons: [],
                pokemonCountInput: '',
                generationInput: '',
            };
        },
        methods: {
            fetchPokemons() {
                const url = this.pokemonCountInput ? `https://pokebuildapi.fr/api/v1/pokemon/limit/${this.pokemonCountInput}` : 'https://pokebuildapi.fr/api/v1/pokemon/limit/20';
                axios
                    .get(url)
                    .then((response) => {
                        this.pokemons = response.data;
                    }, (error) => {
                        console.log(error);
                    });
            },
            genPokemons() {
                const url = this.generationInput ? `https://pokebuildapi.fr/api/v1/pokemon/generation/${this.generationInput}` : 'https://pokebuildapi.fr/api/v1/pokemon/generation/1';
                axios
                    .get(url)
                    .then((response) => {
                        this.pokemons = response.data;
                    }, (error) => {
                        console.log(error);
                    });
            },
        },
        mounted() {
            this.fetchPokemons();
        },
    };
</script>

<template>
    <div class="pokedex">
        <ListeTypesPokemon :pokemonList="pokemons" />
        <span>
            <label for="pokemonCount">Nombre de pokémons : </label>
            <input id="pokemonCount" type="text" v-model="pokemonCountInput" @keyup.enter="fetchPokemons"/>
        </span>
        <span>
            <label for="generation">Génération : </label>
            <input id="generation" type="text" v-model="generationInput" @keyup.enter="genPokemons"/>
        </span>
        <Pokemon v-for="(pokemon, index) in pokemons" :key="index" :pokemonData="pokemon" />
    </div>
</template>

<style scoped>
    .pokedex {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>