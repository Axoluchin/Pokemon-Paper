import { useState } from 'react'
import { useQuery } from 'react-query'

import List from '../src/sections/pokemonList/List'
import { getPokemons } from '../src/services/pokemon/pokemonList'

const IndexPage = () => {
  const [page, setPage] = useState<string | null>(null)
  const { data } = useQuery(['PokemonList', page], () => getPokemons(page))

  const nextPage = () => setPage(data!.next)
  const backPage = () => setPage(data!.previous)

  return (
    <List
      nameList={data?.results || []}
      backPage={backPage}
      nextPage={nextPage}
      canBack={Boolean(data?.previous)}
      canNext={Boolean(data?.next)}
    />
  )
}

export default IndexPage
