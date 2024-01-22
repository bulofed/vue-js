import { createRouter, createWebHistory } from 'vue-router'
import Pokedex from './components/pokedex.vue'
import PokemonDetails from './components/PokemonDetails.vue'

const routes = [
    { path: '/', component: Pokedex },
    { path: '/pokemon/:id', component: PokemonDetails, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router