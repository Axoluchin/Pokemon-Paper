import axios from 'axios'
import { NamedAPIResourceList } from 'pokenode-ts'

import api from '../api'

const axiosGetPokemonList: (url: string) => Promise<NamedAPIResourceList> = (url) =>
  axios.get<NamedAPIResourceList>(url).then(({ data }) => data)

export const getPokemons: (url: string|null) => Promise<NamedAPIResourceList> = (url) =>
  url ? axiosGetPokemonList(url) : api.pokemon.listPokemons()
