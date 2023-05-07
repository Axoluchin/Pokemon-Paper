import { NamedAPIResourceList } from 'pokenode-ts'

import api from '../api'

export const getPokemons: () => Promise<NamedAPIResourceList> = () => api.pokemon.listPokemons()
