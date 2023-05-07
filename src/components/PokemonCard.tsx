import { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Chip, Text } from 'react-native-paper'
import { useQuery } from 'react-query'

import getPokemon from '../services/pokemon/getPokemon'

interface PokemonCardProps {
  name: string
}

const PokemonCard: FC<PokemonCardProps> = ({ name }) => {
  const { data, isLoading } = useQuery(['Pokemon', name], () => getPokemon(name))

  if (!data || isLoading) return null

  return (
    <View style={styles.container}>
      <Card>
        <Card.Cover source={{ uri: data.sprites.front_default as string }} style={styles.cover} />
        <Text variant="bodyLarge" style={styles.id}>
          {data.id}
        </Text>
        <Card.Content>
          <Text variant="headlineSmall" style={styles.name}>
            {data.name.charAt(0).toLocaleUpperCase()}
            {data.name.slice(1)}
          </Text>
        </Card.Content>
      </Card>
    </View>
  )
}

export default PokemonCard

const styles = StyleSheet.create({
  container: {
    padding: 8,
    width: '100%'
  },
  cover: {
    aspectRatio: '1/1',
    height: 150,
    alignSelf: 'center',
    backgroundColor: 'transparent'
  },
  id: {
    position: 'absolute',
    right: 8,
    top: 4,
    fontWeight: 'bold'
  },
  name: {
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
