import { FC } from 'react'
import { ActivityIndicator, List, Text } from 'react-native-paper'
import { useQuery } from 'react-query'

import getGame from '../services/game/getGame'

interface PokemonGamesProps {
  name: string
}

const PokemonGames: FC<PokemonGamesProps> = ({ name }) => {
  const { data, isLoading } = useQuery(['game', name], () => getGame(name))

  if (!data || isLoading) return <ActivityIndicator size="large" />

  return <List.Item title={`Pokemon ${  data.names[5].name}`} right={() => <Text>{data.id}</Text>} />
}

export default PokemonGames
