<script>
    import axios from 'axios'
    export default {
        name: 'Pokemon',
        props: ['pokemonData'],
        methods: {
            getColor(typeName) {
                switch (typeName) {
                    case 'Normal':
                        return '#A8A77A';
                    case 'Feu':
                        return '#EE8130';
                    case 'Eau':
                        return '#6390F0';
                    case 'Électrik':
                        return '#F7D02C';
                    case 'Plante':
                        return '#7AC74C';
                    case 'Glace':
                        return '#96D9D6';
                    case 'Combat':
                        return '#C22E28';
                    case 'Poison':
                        return '#A33EA1';
                    case 'Sol':
                        return '#E2BF65';
                    case 'Vol':
                        return '#A98FF3';
                    case 'Psy':
                        return '#F95587';
                    case 'Insecte':
                        return '#A6B91A';
                    case 'Roche':
                        return '#B6A136';
                    case 'Spectre':
                        return '#735797';
                    case 'Dragon':
                        return '#6F35FC';
                    case 'Ténèbres':
                        return '#705746';
                    case 'Acier':
                        return '#B7B7CE';
                    case 'Fée':
                        return '#D685AD';
                    default:
                        return '#000';
                }
            }
        }
    }
</script>

<template>
    <router-link :to="`/pokemon/${pokemonData.id}`" class="pokemon-card" :style="{ backgroundColor: getColor(pokemonData.apiTypes[0].name) }">
        <img :src="pokemonData.image" alt="Pokemon Image" class="pokemon-image" />
        <h2>{{ pokemonData.name }}</h2>
        <div class="types">
            <div v-for="(type, index) in pokemonData.apiTypes" :key="index" class="type">
                <img :src="type.image" :alt="type.name" />
                <span>{{ type.name }}</span>
            </div>
        </div>
    </router-link>
</template>

<style scoped>
    .pokemon-card {
        border: 1px solid #000;
        padding: 20px;
        text-align: center;
        border-radius: 10px;
        width: 200px;
        margin: 20px;
    }

    .pokemon-image {
        max-width: 100%;
    }

    .types {
        display: flex;
        justify-content: center;
    }

    .type {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 5px;
    }

    .type img {
        max-width: 50px;
        max-height: 50px;
    }

    .type span {
        margin-top: 5px;
        font-weight: bold;
    }

    a {
        text-decoration: none;
    }
</style>