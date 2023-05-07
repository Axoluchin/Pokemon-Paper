import api from '../api'

const getPokemon = (name: string) => api.pokemon.getPokemonByName(name)

export default getPokemon
