import { useQuery } from 'react-query'

import List from '../src/sections/pokemonList/List'
import { getPokemons } from '../src/services/pokemon/pokemonList'

const IndexPage = () => {
  const { data, isLoading } = useQuery('PokemonList', getPokemons)

  if (!data || isLoading) return null

  return <List nameList={data.results} />
}

export default IndexPage
